module.exports = {
  name: 'pers-ac',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/pers-ac',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
