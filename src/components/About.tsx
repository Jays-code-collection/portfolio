import "./_About.scss";

type StatementType = {
  input: string;
  return: string;
};

type Props = {
  statements: StatementType[];
};

const About = (props: Props) => (
  <div className="about-container">
    <div className="terminal">
      <div className="terminal-header">
        <div className="header-button red" />
        <div className="header-button yellow" />
        <div className="header-button green" />
      </div>
      <div className="terminal-window">
        <Statements statements={props.statements} />
      </div>
    </div>
  </div>
);

const Statements = ({ statements }: Props) => (
  <div>
    {statements.map((statement, index) => {
      return <Statement statement={statement} key={index} />;
    })}
    <div className="statement">
      <div className="input-statement">
        <span className="statement-span">&nbsp;</span>
      </div>
    </div>
  </div>
);

type StatementProps = {
  statement: StatementType;
};

const Statement = ({ statement }: StatementProps) => (
  <div className="statement">
    <div className="input-statement">{statement.input}</div>
    <div
      className="return-statement"
      dangerouslySetInnerHTML={{ __html: statement.return }}
    />
  </div>
);

export default About;
