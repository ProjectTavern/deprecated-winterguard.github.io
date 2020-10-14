import yaml from 'js-yaml'

export const getConfig = async () => {
  const config = await import('../config.yml');

  return yaml.safeLoad(config.default);
}