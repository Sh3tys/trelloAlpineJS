export default () => ({
  Lists: JSON.parse(localStorage.getItem('Lists')) || {},
  //Lists: Alpine.$persist([[ Todo, [['DumpTask', 'DescDump', false]] ]]).as('Lists'),
});
