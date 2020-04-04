import React from 'react';
import { MdSearch } from 'react-icons/md';
import { Form, Input } from 'reactstrap';

const SearchInput = (props) => {
  return (
    <Form inline className="cr-search-form" onSubmit={e => {e.preventDefault()}}>
      <MdSearch
        size="20"
        className="cr-search-form__icon-search text-secondary"
      />
      <Input
        id={props.id}
        autoComplete="off"
        type="search"
        className="cr-search-form__input"
        placeholder={props.placeholder}
        onKeyPress={props.onPress}
        onChange={props.changing}
        disabled={props.disabled}
      />
    </Form>
  );
};

export default SearchInput;
