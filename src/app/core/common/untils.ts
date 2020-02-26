import * as _ from 'lodash';

export default () => {
  return {
    InitParams,
    GenNonDuplicateID
  };
};

/**
 * 请求参数过滤:清理请求参数中的空白字段
 * @param params 请求的参数对象
 */
const InitParams = (params) => {
  for (const key in params) {
    if (params[key] === undefined || params[key] === null || params[key] === '') {
      delete params[key];
    }
  }
  return params;
};


const GenNonDuplicateID = (randomLength = 16) => {
  return Math.random().toString().substr(3, randomLength);
};
