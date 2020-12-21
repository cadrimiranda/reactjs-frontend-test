import React, { useRef } from 'react';
import { useHistory } from 'react-router';
// @ts-ignore
import faker from 'faker/locale/pt_BR';

import useCookies from '../hooks/useCookies';

const CreateToken = () => {
  const cookies = useCookies();

  const refInput = useRef<HTMLInputElement>(null);
  const { push } = useHistory();

  function handleSubmit(e: React.FormEvent) {
    e.stopPropagation();
    e.preventDefault();

    const name = refInput.current?.value || faker.name.firstName();
    sessionStorage.setItem('name', name);
    cookies.set('auth', 'autenticado', { path: '/' });
    push('/meeting');
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className='w-full flex justify-center flex-col items-center'>
        <label
          htmlFor='name'
          className='block text-sm font-medium text-gray-700'
        >
          First name
        </label>
        <input
          defaultValue=''
          ref={refInput}
          type='text'
          name='name'
          id='name'
          autoComplete='given-name'
          className='w-3/12 mt-1 focus:ring-indigo-500 focus:border-indigo-500 block shadow-sm sm:text-sm border-gray-300 rounded-md'
        />
      </div>
    </form>
  );
};

export default CreateToken;
