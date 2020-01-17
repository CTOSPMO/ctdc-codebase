import gql from 'graphql-tag';

export const DASHBOARD_QUERY = gql`{
    numberOfTrials
    numberOfCases
    numberOfFiles

     casesCountBaseOnTrialId {
        clinical_trial_id
        cases
    }
     casesCountBaseOnTrialCode {
        clinical_trial_designation
        cases
    }
     casesCountBaseOnPubMedID {
        pubmed_id
        cases
    }
     casesCountBaseOnGender {
        gender
        cases
    }
     casesCountBaseOnRace {
        race
        cases
    }
    casesCountBaseOnEthnicity {
        ethnicity
        cases
    }

    casesCountBaseOnDiagnosis {
        disease
        cases
    }
     casesCountBaseOnFileType {
        file_type
        cases
    }
    casesCountBaseOnFileFormat {
        file_format
        cases
    }

    casesCountBaseOnTrialArm {
        trial_arm
        cases
    }
    
   caseOverview{   
        case_id
        clinical_trial_code
        arm_id
        arm_drug
        disease
        gender
        race
        arm_target
        arms{
            arm_id
        }
        ethnicity
        clinical_trial_id
        pubmed_id
        trial_arm
        file_types
        file_formats
        files{
           uuid
        }
     }
}`;

export const GET_STUDYTABLE_DATA_QUERY = gql`{
    studiesByProgram {
        program_id
        clinical_study_designation
        clinical_study_name
         clinical_study_type
         numberOfCases
    }
  }
  `;

export const GET_CASE_DETAIL_DATA_QUERY = gql`
  query caseDetailByCaseId($case_id: String!){
          caseDetailByCaseId(case_id:$case_id){
            case_id
            clinical_trial_code
            arm_id
            arm_drug
            disease
            gender
            race
            arm_target
            arms{
                arm_id
                arm_target
                arm_drug
            }
            ethnicity
          }
      }`;


export const GET_CASES_QUERY = gql`
   query Case($study_id: String!) {

   sampleCountOfStudy(study_code:$study_id)

   fileCountOfStudy(study_code: $study_id)

   aliguotCountOfStudy(study_code: $study_id)

   caseCountOfStudy(study_code: $study_id)

   caseOverview(study_codes:[$study_id]) {   
        case_id  
        study_code   
        study_type   
        breed   
        diagnosis   
        stage_of_disease   
        age   
        sex   
        neutered_status
     }
  }
  `;


export const GET_PROGRAM_DETAIL_DATA_QUERY = gql`
query program($programTitle: String!) {


  sampleCountOfProgram(program_id: $programTitle)
  fileCountOfProgram(program_id: $programTitle)
  aliguotCountOfProgram(program_id: $programTitle)
  studyCountOfProgram(program_id: $programTitle)
  caseCountOfProgram(program_id: $programTitle)
 
  
  program(program_acronym: $programTitle)
  { 
    program_name
    program_acronym
    program_short_description
    program_full_description
    program_external_url
    program_sort_order
    }
    studiesByProgramId(program_id: $programTitle)
    { 
      program_id
      clinical_study_id
      clinical_study_designation
      clinical_study_name
      clinical_study_description
      clinical_study_type
      date_of_iacuc_approval
      dates_of_conduct
      numberOfCases
      }


}`;


export const GET_PROGRAM_DATA_QUERY = gql`
{
  program(orderBy: program_sort_order_asc)
  {
    program_name
    program_acronym
    program_full_description
    program_short_description
    program_sort_order
    program_external_url
    studies
    {
      clinical_study_designation
    }
  }
}
`;


export const GET_STUDY_DETAIL_DATA_QUERY = gql`
  query Study($csd: String!) {

   sampleCountOfStudy(study_code:$csd)

   fileCountOfStudy(study_code: $csd)

   aliguotCountOfStudy(study_code: $csd)

   caseCountOfStudy(study_code: $csd)

   filesOfStudy(study_code: $csd){
    file_type
   }

  study(clinical_study_designation: $csd){
    program{
      program_acronym
    }
    clinical_study_id
    clinical_study_name
    clinical_study_designation
    clinical_study_description
    clinical_study_type
    date_of_iacuc_approval
    dates_of_conduct
    cohorts{
        cohort_dose
        cohort_description
    }

    study_arms{
      arm
      ctep_treatment_assignment_code
      cohorts{
        cohort_dose
        cohort_description
      }

    }

    principal_investigators{
      pi_first_name
      pi_last_name
      pi_middle_initial
    }
    cases{
      case_id
      diagnoses{
        disease_term
      }
    }
  }
  
 }`;

export const GET_MY_CASES_DATA_QUERY = gql`
query casesInList($caseIds: [String!]!) {

  casesInList(case_ids: $caseIds) {
    case_id
    study_code
    study_type
    breed
    diagnosis
    stage_of_disease
    age
    sex
    neutered_status
}
 filesOfCases(case_ids: $caseIds) {
     case_id
  parent
  file_description
  file_format
  file_locations
  file_name
  file_size
  file_status
  file_type
  md5sum
  uuid
}

}`;


export const TRIALS_QUERY = gql`{
   clinicalTrials{
    clinical_trial_id
  clinical_trial_short_name
  clinical_trial_description
  clinical_trial_designation
  clinical_trial_long_name
  clinical_trial_type
  lead_organization
  principal_investigators
  number_of_arms
  number_of_cases
    }
}
  `;


export const TRIAL_BY_ID_QUERY = gql`
query clinicalTrialByTrialId($id: String!) {

   caseCountByTrialId(trial_id:$id)
   fileCountByTrialId(trial_id:$id)

  clinicalTrialByTrialId(trial_id: $id) {
  clinical_trial_id
  clinical_trial_short_name
  clinical_trial_description
  clinical_trial_designation
  clinical_trial_long_name
  clinical_trial_type
  lead_organization
  principal_investigators
  number_of_cases
  number_of_arms
}

clinicalTrialArmByTrialId(trial_id:$id){
                  arm_id
                  arm_target
                  arm_drug
                  pubmed_id
                  number_of_cases
                }
}`;

export const STATS_QUERY = gql`{
  numberOfTrials
  numberOfCases
  numberOfFiles
  }
  `;
