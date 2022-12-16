import React from 'react';
import { Accordian } from '../../atoms';
import { FAQ_QUESTIONS } from '../../constants/api';

const FAQsection = () => {
  return (
    <div className="h-screen flex flex-col items-center p-20 gap-y-10">
      <h2 className="text-4xl font-bold">
        Frequently Asked Questions
      </h2>
      <div className="flex-1 max-h-[55vh] w-full flex flex-col gap-y-2 xl:px-56">
        {FAQ_QUESTIONS.map((question, key) => (
          <Accordian {...question} key={key} />
        ))}
      </div>
    </div>
  );
};

export default FAQsection;
