import React, { useState } from "react";
import { useSearchParams } from 'react-router-dom';

import AutoCompleteList from './AutoCompleteList';
import './style.scss';

type Props = {
  suggestions: string[],
  name: 'departure' | 'destination',
  value: string,
};

type State = {
  activeSuggestion: number,
  filteredSuggestions: string[],
  showSuggestions: boolean,
  userInput: string,
};

export default function index({ suggestions, name, value }: Props) {
  const [searchParams, setSearchParams] = useSearchParams({});
  const [state, setState] = useState<State>({
    activeSuggestion: 0,
    filteredSuggestions: [],
    showSuggestions: false,
    userInput: value,
  });

  function setQueryParams(userInput: string) {
    const updatedSearchParams = new URLSearchParams(searchParams.toString());
    updatedSearchParams.set(name, userInput);
    setSearchParams(updatedSearchParams.toString());
  }

  function onChange(event: React.ChangeEvent<HTMLInputElement>) {
    const userInput = event.currentTarget.value;

    setQueryParams(userInput);

    const filteredSuggestions = suggestions.filter(
      (suggestion: string) =>
        suggestion.toLowerCase().indexOf(userInput.toLowerCase()) > -1
    );

    setState({
      ...state,
      filteredSuggestions,
      showSuggestions: true,
      userInput: event.currentTarget.value,
    });
  }

  function onClick(event: React.MouseEvent<HTMLLIElement>) {
    const userInput = event.currentTarget.innerText;

    setQueryParams(userInput);

    setState({
      activeSuggestion: 0,
      filteredSuggestions: [],
      showSuggestions: false,
      userInput,
    });
  }

  function onKeyDown(event: React.KeyboardEvent) {
    const { activeSuggestion, filteredSuggestions } = state;

    if (event.key === 'Enter') {
      setQueryParams(filteredSuggestions[activeSuggestion] || '');

      setState({
        ...state,
        activeSuggestion: 0,
        showSuggestions: false,
        userInput: filteredSuggestions[activeSuggestion]
      });
    }

    else if (event.key === 'ArrowUp') {
      if (activeSuggestion === 0) {
        return;
      }

      setState({ ...state, activeSuggestion: activeSuggestion - 1 });
    }

    else if (event.key === 'ArrowDown') {
      if (activeSuggestion + 1 === filteredSuggestions.length) {
        return;
      }

      setState({ ...state, activeSuggestion: activeSuggestion + 1 });
    }
  }

  return (
    <div className='auto-complete'>
      <input
        type="text"
        name={name}
        onChange={onChange}
        onKeyDown={onKeyDown}
        value={value}
      />

      {state.showSuggestions && state.userInput && (
        <ul className='suggestions'>
          <AutoCompleteList
            filteredSuggestions={state.filteredSuggestions}
            activeSuggestion={state.activeSuggestion}
            onClick={onClick}
          />
        </ul>
      )}
    </div>
  );
}
