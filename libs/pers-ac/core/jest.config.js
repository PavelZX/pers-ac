module.exports = {
  name: 'pers-ac-core',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/libs/pers-ac/core',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
