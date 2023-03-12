import { enableES5, produce } from 'immer';

export default (...args) => {
  enableES5();
  return produce(...args);
};
//인터넷 익스플로러에서 이머가 작동을 안해서 설정을 해줘야 함.