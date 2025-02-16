interface IProps {
  children: React.ReactNode;
  classes?: string;
}

const Wrapper: React.FC<IProps> = ({ children, classes }) => {
  return (
    <section className={`container max-w-screen-xl mx-auto p-4 ${classes}`}>
      {children}
    </section>
  );
};

export default Wrapper;
