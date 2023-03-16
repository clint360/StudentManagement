import React, { useRef, useState } from 'react';
import ReactToPrint from 'react-to-print';
import ComponentToPrint from './ComponentToPrint';

export const Example = () => {
  const componentRef = useRef();

  const [text, setText] = useState('Hello world!');

  return (
    <div>
      <ReactToPrint
        trigger={() => <button>Print this out!</button>}
        content={() => componentRef.current}
      />
      <ComponentToPrint ref={componentRef} text={text} />
    </div>
  );
};
