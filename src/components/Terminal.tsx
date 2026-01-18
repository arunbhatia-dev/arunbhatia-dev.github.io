import React, { useState, useRef, useEffect } from 'react';
import '../styles/Terminal.css';

interface TerminalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface OutputLine {
  type: 'input' | 'output' | 'error' | 'ascii';
  content: string;
}

const Terminal: React.FC<TerminalProps> = ({ isOpen, onClose }) => {
  const [input, setInput] = useState('');
  const [history, setHistory] = useState<OutputLine[]>([]);
  const [commandHistory, setCommandHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const [showMatrix, setShowMatrix] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const outputRef = useRef<HTMLDivElement>(null);

  const availableCommands = ['help', 'about', 'skills', 'experience', 'projects', 'contact', 'clear', 'cls', 'exit', 'hello', 'vim', 'matrix', 'sudo hire arun', 'rm -rf /'];

  const skills = {
    languages: ['TypeScript', 'JavaScript', 'Python', 'Scala', 'C'],
    frameworks: ['React', 'Node.js', 'FastAPI', 'Flask', 'PySpark'],
    ai_ml: ['TensorFlow', 'PyTorch', 'Scikit-learn', 'HuggingFace', 'LangChain', 'LlamaIndex'],
    databases: ['PostgreSQL', 'MongoDB', 'Redis'],
    cloud: {
      aws: ['EC2', 'Lambda', 'S3', 'RDS', 'SageMaker', 'Bedrock', 'ECS', 'Fargate'],
      azure: ['App Services', 'Functions', 'Blob Storage', 'Azure AI', 'Container Instances']
    }
  };

  const experiences = [
    { role: 'Software Developer', company: 'Digia', period: 'Aug 2024 - Present', current: true },
    { role: 'Data Scientist', company: 'Kelluu', period: 'Sep 2023 - Aug 2024' },
    { role: 'ML Engineer Trainee', company: 'Savox Communications', period: 'May 2023 - Sep 2023' },
    { role: 'Teaching Assistant', company: 'Aalto University', period: 'Jan 2022 - May 2023' },
    { role: 'Research Assistant', company: 'Aalto University', period: 'May 2022 - Aug 2022' },
  ];

  const projects = [
    { name: 'Intelligent Audio Listener', tech: 'Python, C, ML, Raspberry Pi' },
    { name: 'Federated Learning - Water Quality', tech: 'Python, TensorFlow, Federated Learning' },
    { name: 'Delivery Time Weather Analysis', tech: 'Python, Scikit-learn, Data Analysis' },
    { name: 'Bayesian Data Analysis', tech: 'R, Bayesian Statistics' },
    { name: 'Aalto Campus Adventure Game', tech: 'Scala, Functional Programming' },
    { name: 'Portfolio Website', tech: 'React, TypeScript, Three.js' },
  ];

  const contact = {
    email: 'arun.bhatia@aalto.fi',
    github: 'github.com/arunbhatia-dev',
    linkedin: 'linkedin.com/in/arun-bhatia-807043204'
  };

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
      if (history.length === 0) {
        setHistory([
          { type: 'ascii', content: 'ARUN_BHATIA_DEV' },
          { type: 'output', content: '' },
          { type: 'output', content: 'Welcome to my terminal portfolio! Type "help" for available commands.' },
          { type: 'output', content: '' },
        ]);
      }
    }
  }, [isOpen, history.length]);

  useEffect(() => {
    if (outputRef.current) {
      outputRef.current.scrollTop = outputRef.current.scrollHeight;
    }
  }, [history]);

  const processCommand = (cmd: string): OutputLine[] => {
    const trimmed = cmd.trim().toLowerCase();
    const output: OutputLine[] = [];

    switch (trimmed) {
      case 'help':
        output.push({ type: 'output', content: '' });
        output.push({ type: 'output', content: 'Available commands:' });
        output.push({ type: 'output', content: '' });
        output.push({ type: 'output', content: 'help             Show this help message' });
        output.push({ type: 'output', content: 'about            About me' });
        output.push({ type: 'output', content: 'skills           My tech stack' });
        output.push({ type: 'output', content: 'experience       Work history' });
        output.push({ type: 'output', content: 'projects         Things I\'ve built' });
        output.push({ type: 'output', content: 'contact          Get in touch' });
        output.push({ type: 'output', content: 'clear/cls        Clear terminal' });
        output.push({ type: 'output', content: 'exit             Close terminal' });
        output.push({ type: 'output', content: '' });
        output.push({ type: 'output', content: 'Fun stuff:' });
        output.push({ type: 'output', content: 'hello            Hello, World!' });
        output.push({ type: 'output', content: 'matrix           Enter the Matrix' });
        output.push({ type: 'output', content: 'vim              Try to exit' });
        output.push({ type: 'output', content: 'sudo hire arun   Hire me!' });
        output.push({ type: 'output', content: 'rm -rf /         Live dangerously' });
        output.push({ type: 'output', content: '' });
        output.push({ type: 'output', content: 'Tip: Use Tab to autocomplete commands' });
        output.push({ type: 'output', content: '' });
        break;

      case 'about':
        output.push({ type: 'output', content: '' });
        output.push({ type: 'output', content: 'Hey, I\'m Arun Bhatia.' });
        output.push({ type: 'output', content: '' });
        output.push({ type: 'output', content: 'Software Engineer at Digia, working on AI, ML, and Big Data.' });
        output.push({ type: 'output', content: 'MSc from Aalto University, Finland.' });
        output.push({ type: 'output', content: '' });
        output.push({ type: 'output', content: 'I build scalable software that solves complex problems.' });
        output.push({ type: 'output', content: 'Outside work: sports, science, and exploring new tech.' });
        output.push({ type: 'output', content: '' });
        break;

      case 'skills':
        output.push({ type: 'output', content: '' });
        output.push({ type: 'output', content: 'Languages    ' + skills.languages.join(', ') });
        output.push({ type: 'output', content: 'Frameworks   ' + skills.frameworks.join(', ') });
        output.push({ type: 'output', content: 'AI/ML        ' + skills.ai_ml.join(', ') });
        output.push({ type: 'output', content: 'Databases    ' + skills.databases.join(', ') });
        output.push({ type: 'output', content: 'AWS          ' + skills.cloud.aws.join(', ') });
        output.push({ type: 'output', content: 'Azure        ' + skills.cloud.azure.join(', ') });
        output.push({ type: 'output', content: '' });
        break;

      case 'experience':
      case 'experiance':
        output.push({ type: 'output', content: '' });
        experiences.forEach(exp => {
          const current = exp.current ? ' [CURRENT]' : '';
          output.push({ type: 'output', content: `${exp.role}` });
          output.push({ type: 'output', content: `@ ${exp.company} | ${exp.period}${current}` });
          output.push({ type: 'output', content: '' });
        });
        break;

      case 'projects':
        output.push({ type: 'output', content: '' });
        projects.forEach((proj, i) => {
          output.push({ type: 'output', content: `${i + 1}. ${proj.name}` });
          output.push({ type: 'output', content: `   ${proj.tech}` });
          output.push({ type: 'output', content: '' });
        });
        break;

      case 'contact':
        output.push({ type: 'output', content: '' });
        output.push({ type: 'output', content: `Email:     ${contact.email}` });
        output.push({ type: 'output', content: `GitHub:    ${contact.github}` });
        output.push({ type: 'output', content: `LinkedIn:  ${contact.linkedin}` });
        output.push({ type: 'output', content: '' });
        break;

      case 'clear':
      case 'cls':
        setHistory([]);
        return [];

      case 'exit':
        onClose();
        return [];

      case 'hello':
        output.push({ type: 'output', content: '' });
        output.push({ type: 'output', content: 'Hello, World!' });
        output.push({ type: 'output', content: '' });
        break;

      case 'vim':
        output.push({ type: 'output', content: '' });
        output.push({ type: 'output', content: 'You\'re stuck forever now. Just kidding, type :q' });
        output.push({ type: 'output', content: '...wait, that won\'t work here either.' });
        output.push({ type: 'output', content: '' });
        break;

      case 'sudo hire arun':
        output.push({ type: 'output', content: '' });
        output.push({ type: 'output', content: '[sudo] password for recruiter: ********' });
        output.push({ type: 'output', content: '' });
        output.push({ type: 'output', content: '✓ Permission granted!' });
        output.push({ type: 'output', content: '✓ Initializing hiring process...' });
        output.push({ type: 'output', content: '✓ Sending offer letter...' });
        output.push({ type: 'output', content: '' });
        output.push({ type: 'output', content: 'Just kidding! But let\'s connect:' });
        output.push({ type: 'output', content: 'linkedin.com/in/arun-bhatia-807043204' });
        output.push({ type: 'output', content: '' });
        break;

      case 'rm -rf /':
      case 'rm -rf':
        output.push({ type: 'output', content: '' });
        output.push({ type: 'error', content: 'Deleting system files...' });
        output.push({ type: 'error', content: 'Removing /usr...' });
        output.push({ type: 'error', content: 'Removing /home...' });
        output.push({ type: 'error', content: 'Removing /var...' });
        output.push({ type: 'output', content: '' });
        output.push({ type: 'output', content: 'Just kidding! This is a browser, not your actual terminal.' });
        output.push({ type: 'output', content: 'Your files are safe... probably.' });
        output.push({ type: 'output', content: '' });
        break;

      case 'matrix':
        setShowMatrix(true);
        setTimeout(() => setShowMatrix(false), 4000);
        output.push({ type: 'output', content: '' });
        output.push({ type: 'output', content: 'Wake up, Neo...' });
        output.push({ type: 'output', content: 'The Matrix has you...' });
        output.push({ type: 'output', content: '' });
        break;

      case '':
        break;

      default:
        output.push({ type: 'error', content: `command not found: ${cmd}` });
        output.push({ type: 'output', content: 'Type "help" for available commands.' });
        output.push({ type: 'output', content: '' });
    }

    return output;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const trimmedInput = input.trim().toLowerCase();

    // Handle clear/cls specially - don't add to history display
    if (trimmedInput === 'clear' || trimmedInput === 'cls') {
      setHistory([]);
      if (input.trim()) {
        setCommandHistory(prev => [...prev, input]);
        setHistoryIndex(-1);
      }
      setInput('');
      return;
    }

    const newHistory: OutputLine[] = [
      ...history,
      { type: 'input', content: input }
    ];

    const output = processCommand(input);

    if (input.trim()) {
      setCommandHistory(prev => [...prev, input]);
      setHistoryIndex(-1);
    }

    setHistory([...newHistory, ...output]);
    setInput('');
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Tab') {
      e.preventDefault();
      e.stopPropagation();
      const currentInput = input.toLowerCase();
      if (currentInput.length > 0) {
        const matches = availableCommands.filter(cmd => cmd.startsWith(currentInput));
        if (matches.length === 1) {
          setInput(matches[0]);
        } else if (matches.length > 1) {
          // Find common prefix among matches
          let commonPrefix = matches[0];
          for (let i = 1; i < matches.length; i++) {
            while (commonPrefix.length > 0 && !matches[i].startsWith(commonPrefix)) {
              commonPrefix = commonPrefix.slice(0, -1);
            }
          }
          if (commonPrefix.length > currentInput.length) {
            setInput(commonPrefix);
          }
        }
      }
      return;
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (commandHistory.length > 0) {
        const newIndex = historyIndex < commandHistory.length - 1 ? historyIndex + 1 : historyIndex;
        setHistoryIndex(newIndex);
        setInput(commandHistory[commandHistory.length - 1 - newIndex] || '');
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (historyIndex > 0) {
        const newIndex = historyIndex - 1;
        setHistoryIndex(newIndex);
        setInput(commandHistory[commandHistory.length - 1 - newIndex] || '');
      } else {
        setHistoryIndex(-1);
        setInput('');
      }
    } else if (e.key === 'Escape') {
      onClose();
    }
  };

  const handleContainerClick = () => {
    inputRef.current?.focus();
  };

  if (!isOpen) return null;

  const asciiArt = `
   █████╗ ██████╗ ██╗   ██╗███╗   ██╗
  ██╔══██╗██╔══██╗██║   ██║████╗  ██║
  ███████║██████╔╝██║   ██║██╔██╗ ██║
  ██╔══██║██╔══██╗██║   ██║██║╚██╗██║
  ██║  ██║██║  ██║╚██████╔╝██║ ╚████║
  ╚═╝  ╚═╝╚═╝  ╚═╝ ╚═════╝ ╚═╝  ╚═══╝`;

  return (
    <div className="terminal-overlay" onClick={onClose}>
      <div className={`terminal-container ${showMatrix ? 'matrix-active' : ''}`} onClick={e => e.stopPropagation()}>
        {showMatrix && <div className="matrix-rain" />}
        <div className="terminal-header">
          <div className="terminal-buttons">
            <span className="terminal-btn close" onClick={onClose}></span>
            <span className="terminal-btn minimize"></span>
            <span className="terminal-btn maximize"></span>
          </div>
          <span className="terminal-title">arun@portfolio ~ </span>
        </div>
        <div className="terminal-body" ref={outputRef} onClick={handleContainerClick}>
          {history.map((line, index) => (
            <div key={index} className={`terminal-line ${line.type}`}>
              {line.type === 'input' ? (
                <><span className="prompt">❯ </span>{line.content}</>
              ) : line.type === 'ascii' ? (
                <pre className="ascii-art">{asciiArt}</pre>
              ) : (
                line.content
              )}
            </div>
          ))}
          <form onSubmit={handleSubmit} className="terminal-input-line">
            <span className="prompt">❯ </span>
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={e => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              className="terminal-input"
              autoComplete="off"
              spellCheck={false}
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Terminal;
