export const actionWrapper = (namespace) => (type, payload, meta = {}) => {
  return {
    type,
    payload,
    meta: {
      ...meta,
      namespace: namespace
    }
  };
};
