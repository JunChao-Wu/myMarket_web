
// 基地址
const BASE_URL = 'http://192.168.14.174';
const BASE_PORT = '1339';
export const BASE_API = `${BASE_URL}:${BASE_PORT}`;

// 次级地址
const PURCHASE_BASE_URL = `/purchase`;
const GOODS_BASE_URL = `/goods`;
const CATEGORY_BASE_URL = `/category`;
const WARNING_LINE_BASE_URL = `/warningLine`;



export const API = {
  purchase: {
    add: `${PURCHASE_BASE_URL}/add`,
    get: `${PURCHASE_BASE_URL}/get`,
    edit: `${PURCHASE_BASE_URL}/edit`,
    delete: `${PURCHASE_BASE_URL}/delete`,
    getPurchaseList: `${PURCHASE_BASE_URL}/getPurchaseList`,
  },
  goods: {
    add: `${GOODS_BASE_URL}/add`,
    get: `${GOODS_BASE_URL}/get`,
    edit: `${GOODS_BASE_URL}/edit`,
    delete: `${GOODS_BASE_URL}/delete`,
  },
  category: {
    get: `${CATEGORY_BASE_URL}/get`,
    add: `${CATEGORY_BASE_URL}/add`,
    edit: `${CATEGORY_BASE_URL}/edit`,
    delete: `${CATEGORY_BASE_URL}/delete`,
  },
  warningLine: {
    get: `${WARNING_LINE_BASE_URL}/get`,
    edit: `${WARNING_LINE_BASE_URL}/edit`,
  },
}