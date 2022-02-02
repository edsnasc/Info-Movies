const removeUndefined = (obj) => {
    let newObj = {};
    Object.keys(obj).forEach((key) => {
      if (obj[key] === Object(obj[key])) newObj[key] = removeUndefined(obj[key]);
      else if (obj[key] !== undefined) newObj[key] = obj[key];
    });
    return newObj;
  };
  const next = require('next/dist/lib/is-serializable-props');
  const isSerializableProps = next.isSerializableProps;
  next.isSerializableProps = (page, method, input) => isSerializableProps(page, method, removeUndefined(input));