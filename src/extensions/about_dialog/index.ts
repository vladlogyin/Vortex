import { IExtensionContext } from '../../types/IExtensionContext';

import AboutButton from './views/AboutButton';

function init(context: IExtensionContext): boolean {
  context.registerIcon('help-icons', AboutButton, () => {
    return null;
  });

  return true;
}

export default init;
