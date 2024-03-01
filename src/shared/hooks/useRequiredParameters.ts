import { useParams } from 'react-router-dom';

export const useRequiredParameters = <T extends Record<string, unknown>>() =>
  useParams() as T;
