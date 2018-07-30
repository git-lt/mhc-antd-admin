import React from 'react';

export default props => {
  const { content = null, meta } = props;
  if (!content) return null;
  console.log('content===========');
  console.log(content);

  return (
    <div id="doc">
      <h1>{meta.title}</h1>
      <div className="page-content">
        {props.utils.toReactComponent(content)}
      </div>
    </div>
  );
};
