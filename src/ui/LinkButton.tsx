import { Link, useNavigate } from 'react-router-dom';

interface LinkButtonProps {
    children: React.ReactNode,
    to: string
}

function LinkButton(linkButtonProps: LinkButtonProps) {
  const navigate = useNavigate();
  const className = 'text-sm text-blue-500 hover:text-blue-600 hover:underline';

  if (linkButtonProps.to === '-1')
    return (
      <button className={className} onClick={() => navigate(-1)}>
        {linkButtonProps.children}
      </button>
    );

  return (
    <Link to={linkButtonProps.to} className={className}>
      {linkButtonProps.children}
    </Link>
  );
}

export default LinkButton;