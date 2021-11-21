import classnames from 'classnames';

interface IProps {
  emoji?: string;
  type?: 'warning' | 'error' | 'tip';
  children?: React.ReactNode;
}

export default function Callout(props: IProps) {
  const { children, emoji = '💡', type = 'tip' } = props;
  return (
    <div className="container">
      <div className="icon">{emoji}</div>
      <div className="children">{children}</div>
      <style jsx>{`
        .container {
          padding: 0.5rem 1rem;
          border-radius: 0.5rem;
          display: flex;
          margin-bottom: 1rem;
          background: ${classnames({
            '#fffaf1': type === 'tip',
            '#fefbc2': type === 'warning',
            '#fdd7d8': type === 'error',
          })};
        }
        .icon {
          margin-right: 0.8rem;
          font-size: 1.25rem;
        }
        .children {
          padding-top: 0.2em;
          color: ${classnames({
            '#9b4227': type === 'tip',
            '#734217': type === 'warning',
            '#732b2c': type === 'error',
          })};
        }
        .children :global(p) {
          text-align: left;
          margin: 0 !important;
        }
        .children :global(strong) {
          color: #9b4227;
        }
      `}</style>
    </div>
  );
}
