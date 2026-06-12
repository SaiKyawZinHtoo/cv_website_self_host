export function ThemeScript() {
  const script = `
    (function () {
      try {
        var theme = localStorage.getItem('cv-theme');
        var locale = localStorage.getItem('cv-locale');
        document.documentElement.classList.add(theme === 'light' ? 'light' : 'dark');
        document.documentElement.lang = locale === 'my' ? 'my' : 'en';
        if (locale) document.documentElement.dataset.locale = locale;
      } catch (e) {
        document.documentElement.classList.add('dark');
      }
    })();
  `;

  return <script dangerouslySetInnerHTML={{ __html: script }} />;
}
