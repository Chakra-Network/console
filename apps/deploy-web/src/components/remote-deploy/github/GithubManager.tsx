import type { Dispatch } from "react";
import type { Control, UseFormSetValue } from "react-hook-form";

import { useRepos } from "@src/queries/useGithubQuery";
import type { SdlBuilderFormValuesType, ServiceType } from "@src/types";
import type { GitHubProfile } from "@src/types/remoteProfile";
import Repos from "../Repos";
import GithubBranches from "./GithubBranches";

const GithubManager = ({
  control,
  setValue,
  services,
  setDeploymentName,
  deploymentName,
  profile
}: {
  setDeploymentName: Dispatch<string>;
  deploymentName: string;
  control: Control<SdlBuilderFormValuesType>;

  setValue: UseFormSetValue<SdlBuilderFormValuesType>;
  services: ServiceType[];
  profile?: GitHubProfile;
}) => {
  const { data: repos, isLoading } = useRepos();

  return (
    <>
      <Repos
        repos={repos
          ?.filter(repo => repo.owner?.login === profile?.login || repo?.owner?.type === "Organization")
          ?.map(repo => ({
            name: repo.name,
            default_branch: repo?.default_branch,
            html_url: repo?.html_url,
            private: repo?.private,
            id: repo.id?.toString(),
            owner: repo?.owner
          }))}
        setValue={setValue}
        isLoading={isLoading}
        services={services}
        setDeploymentName={setDeploymentName}
        deploymentName={deploymentName}
        profile={profile}
      />
      <GithubBranches services={services} control={control} />
    </>
  );
};

export default GithubManager;
