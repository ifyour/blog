const YEAR = new Date().getFullYear();
const COPYRIGHT_STATEMENT = 'This site and all its content are licensed under a Creative Commons Attribution-NonCommercial 4.0 International License.';

export default {
  readMore: 'Read More →',
  head: (
    <>
      <link rel="alternate" type="application/rss+xml" title="RSS" href="/feed.xml" />
      <link rel="preload" href="/fonts/Inter-roman.latin.var.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
    </>
  ),
  footer: (
    <small style={{ display: "block", marginTop: "8rem" }}>
      <abbr title={COPYRIGHT_STATEMENT} style={{ cursor: "help" }} >CC BY-NC 4.0</abbr>
      {' '}
      <time>{YEAR}</time> © Ming's blog
      <a style={{ float: 'right' }} href="/feed.xml">RSS</a>
    </small>
  ),
};
