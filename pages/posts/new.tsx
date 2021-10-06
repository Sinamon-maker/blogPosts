import { useState } from 'react';
import Router from 'next/router';
import MainLayout from '../../components/mainLayout';

import styled from 'styled-components';
import axios from 'axios';

const FormWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Form = styled.form`
  background: #FFFFF;
  border-radius: 1.5rem;
  padding: 3rem;
  max-width: 500px;
  width: 100%;
`;

const InputField = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1.5rem;
`;

const Input = styled.input`
  width: 100%;
  display: flex;
  border: 1px solid; #E5E5E5;
  border-radius: 0.5rem;
  outline: none;
  padding: 0.5rem 1rem;
`;

const TextLabel = styled.label`
  font-style: normal;
  font-weight: 300;
  font-size: 1.8rem;
  line-height: 2.1rem;
  margin-bottom: 0.5rem;
`;

const TextArea = styled.textarea`
  width: 100%;
display: block;
  border: 1px solid; #E5E5E5;
  border-radius: 0.5rem;
  outline: none;
  padding: 0.5rem 1rem;
  min-height: 40rem;
  resize: none;
  outline: none;
   margin-bottom: 0.5rem;
`;

const Button = styled.button`
color: white;
font-size: 2rem;
  border: 1px solid; #E5E5E5;
  border-radius: 0.5rem;
  outline: none;
  padding: 1rem 3rem;

  outline: none;
   margin-bottom: 0.5rem;
   background: #3385ff;

   &:disabled{
     opacity: 0.5;
   }
    &:hover{
  background: #66a3ff;
   }
`;

const New = (): void => {
  const [title, setTitle] = useState('');
  const [text, setText] = useState('');

  const onChange = (e) => {
    const newValue = e.target.value;
    if (e.target.name === 'title') {
      setTitle(newValue);
    } else {
      setText(newValue);
    }
  };

  const disabled = title.trim().length === 0 || text.trim().length === 0;

  const onSubmit = async (e) => {
    e.preventDefault();

    await axios.post(
      'https://simple-blog-api.crew.red/posts',

      {
        title,
        body: text,
      }
    );

    setTitle('');
    setText('');
    Router.push('/')
  };

  return (
    <>
      <MainLayout>
        <FormWrapper>
          <Form onSubmit={onSubmit}>
            <InputField>
              <TextLabel>Name of the article</TextLabel>
              <Input
                type="text"
                name="title"
                value={title}
                onChange={onChange}
              />
            </InputField>
            <InputField>
              <TextLabel>Text of the article</TextLabel>
              <TextArea name="text" value={text} onChange={onChange} />
            </InputField>

            <Button disabled={disabled} type="submit">
              Send
            </Button>
          </Form>
        </FormWrapper>
      </MainLayout>
    </>
  );
};

export default New;
