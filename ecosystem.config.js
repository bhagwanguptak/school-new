
module.exports = {
  apps: [{
    name: 'school-app',              // Application name
    script: 'server.js',         // Script to be run
    watch: true,                 // Automatically restart app on file changes
    ignore_watch: ["node_modules"], // Don't watch node_modules for changes
    env: {
      "NODE_ENV": "development",
    },
    env_production: {
      "NODE_ENV": "production",
    },
    // Log file configuration
    output: '~/.pm2/logs/school-app-out.log',
    error: '~/.pm2/logs/school-app-error.log',
    log_date_format: 'YYYY-MM-DD HH:mm:ss Z', // Add timestamps to logs
    merge_logs: true // Merge logs from all instances of the app
  }]
};
