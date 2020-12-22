module.exports = {
  name: 'pers-ac-ui',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/libs/pers-ac/ui',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
