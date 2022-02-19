type Statement = {
  input: string;
  return: string;
};

export default [
  {
    input: "Jay.currentLocation",
    return: '"London, UK"',
  },
  {
    input: "Jay.contactInfo",
    return:
      '["<a href="mailto:j.sharma0860@gmail.com">j.sharma0860@gmail.com</a>", "<a rel="noopener" href="https://www.linkedin.com/in/jay-sharma-2606a2150/" target="_blank">LinkedIn</a>", "<a rel="noopener" href="https://github.com/Jays-code-collection" target="_blank">github</a>"]',
  },
  {
    input: "Jay.cv",
    return:
      '"<a rel="noopener" href="https://jays-code-collection.github.io/portfolio/jaysharma.pdf" target="_blank">jaysharma.pdf</a>"',
  },
  {
    input: "Jay.education",
    return:
      '"MMath with Honours in Maths with Economics 2:1 - University of Sussex"',
  },
  {
    input: "Jay.skills",
    return:
      '["Python", "Flask", "JavaScript", "TypeScript", "React", "C++", "Rust", "git"]',
  },
  {
    input: "Jay.interests",
    return: '["Programming", "Basketball", "NBA", "Muay Thai", "Reading"]',
  },
] as Statement[];
