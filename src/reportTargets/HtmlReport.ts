import { fstat } from 'fs';
import { OutputTarget } from '../Summary';
import fs from 'fs';

export class HtmlReport implements OutputTarget {
  print(report: string): void {
    const html = `
      <body>
        <h1>Analysis Output</h1>
        <div>${report}</div>
      </body>
    `;
    fs.writeFileSync('report.html', html);
  }
}
