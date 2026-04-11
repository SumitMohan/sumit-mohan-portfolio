const fs = require('fs');
const path = require('path');

const historyDir = path.join(process.env.APPDATA, 'Code', 'User', 'History');
const targetFiles = [
  'index.css',
  'HeroSection.tsx',
  'AboutSection.tsx',
  'ExpertiseSection.tsx',
  'ExperienceSection.tsx',
  'AchievementsSection.tsx',
  'PublicationsSection.tsx',
  'CTASection.tsx',
  'Footer.tsx',
  'Index.tsx',
  'AcademicLeadershipSection.tsx',
  'TrustSection.tsx',
  'TestimonialsSection.tsx'
];

let foundMappings = [];

if (fs.existsSync(historyDir)) {
  const folders = fs.readdirSync(historyDir);

  for (const folder of folders) {
    const folderPath = path.join(historyDir, folder);
    const entriesPath = path.join(folderPath, 'entries.json');

    if (fs.existsSync(entriesPath)) {
      try {
        const data = JSON.parse(fs.readFileSync(entriesPath, 'utf8'));
        const fileUri = data.resource || data.resourceId || '';

        // Check if this history folder is for one of our target files
        for (const target of targetFiles) {
          if (fileUri.endsWith(target)) {
            // Find the entry that has a timestamp before 16:00:00 today (before the FAANG edits)
            // But after 14:00:00 (when the rebranding was being finalized)
            let bestEntry = null;
            let bestTimestamp = 0;

            for (const entry of data.entries) {
              const ts = entry.timestamp;
              // we want the latest entry before today at 16:35 / 4:35 PM.
              // Current time is ~ 17:43. FAANG FAANG was around 16:40.
              // Let's just print all entries so we can inspect them first to be safe.
              foundMappings.push({
                file: target,
                uri: fileUri,
                timestamp: ts,
                date: new Date(ts).toLocaleString(),
                id: entry.id,
                backupPath: path.join(folderPath, entry.id)
              });
            }
          }
        }
      } catch (err) {
        // ignore
      }
    }
  }
}

// Sort and log
foundMappings.sort((a, b) => a.file.localeCompare(b.file) || a.timestamp - b.timestamp);
fs.writeFileSync('vshistory_report.json', JSON.stringify(foundMappings, null, 2));
console.log(`Saved ${foundMappings.length} entries to vshistory_report.json`);
