module.exports = {
  root: true,
  extends: '@react-native',
  plugins: ['boundaries'],
  settings: {
    'boundaries/elements': [
      {
        type: 'app',
        pattern: 'src/app/*',
      },
      {
        type: 'feature',
        pattern: 'src/features/*',
        capture: ['featureName'],
      },
      {
        type: 'shared',
        pattern: 'src/shared/*',
      },
    ],
  },

  rules: {
    // 🔒 ห้าม import ข้าม boundary
    'boundaries/element-types': [
      'error',
      {
        default: 'disallow',
        rules: [
          // app import ได้ทุกอย่าง
          {
            from: 'app',
            allow: ['feature', 'shared'],
          },

          // feature:
          // - import feature ตัวเองได้
          // - import shared ได้
          {
            from: 'feature',
            allow: [
              'shared',

              // ✅ feature ตัวเอง
              ['feature', { featureName: '${featureName}' }],

              // ✅ system features ที่อนุญาตให้รู้จักกัน กำหนดเฉพาะเท่าที่จำเป็นเท่านั้น 
              // เช่น auth เพราะมี method logout ที่ต้องการเรียกใช้จากหลาย feature ได้
              ['feature', { featureName: 'auth' }],
            ],
          },

          // shared ต้องไม่รู้จัก feature
          {
            from: 'shared',
            allow: ['shared'],
          },
        ],
      },
    ],
  },
}
