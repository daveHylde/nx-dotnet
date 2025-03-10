import { ProjectType } from '@nrwl/devkit';

/**
 * Typing for the shared project generator's options
 */
export interface NxDotnetProjectGeneratorSchema {
  name: string;
  tags?: string;
  directory?: string;
  template?: string;
  language: string;
  testTemplate: 'nunit' | 'mstest' | 'xunit' | 'none';
  testProjectNameSuffix?: string;
  projectType?: ProjectType;
  solutionFile?: string | boolean;
  skipSwaggerLib: boolean;
  pathScheme: 'nx' | 'dotnet';
  useNxPluginOpenAPI?: boolean;
}
