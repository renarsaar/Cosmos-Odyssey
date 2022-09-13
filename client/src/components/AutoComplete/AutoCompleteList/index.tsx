import React from 'react';

type Props = {
  filteredSuggestions: string[],
  activeSuggestion: number,
  onClick: (event: React.MouseEvent<HTMLLIElement>) => void,
};

export default function index({
  filteredSuggestions, activeSuggestion, onClick
}: Props) {
  return (
    <>
      {filteredSuggestions.map((suggestion: string, index: number) => (
        <li
          key={suggestion}
          className={index === activeSuggestion
            ? 'suggestion active'
            : 'suggestion'}
          onClick={onClick}>
          {suggestion}
        </li>
      )
      )}
    </>
  );
}
