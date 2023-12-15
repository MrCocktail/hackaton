import { Button } from 'flowbite-react';

export default function MyButton({content, isDisabled=false}) {
  return (
    <div>
      <Button disabled={isDisabled}>{content}</Button>
    </div>
  );
}