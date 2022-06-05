import Link from 'next/link';
const LinkCustomStyled = {};
const LinkCustom = (props) => {
  return (
    <Link href={`${props.href}`}>
      <a className='link-custom-styled'>
        <div>{props.children}</div>
      </a>
    </Link>
  );
};
export default LinkCustom;
