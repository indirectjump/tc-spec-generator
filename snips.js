var snip = [];

var ctype = ["architecture", "ds_marathon", "design_general", "dev_fe", "dev_general", "qa_bughunt"]
var snips = 
            [
                [   // architecture
                    ["Challenge Objective"  , "challenge_objective"],
                    ["Project Background"   , "project_background" ],
                    ["Submission Requirements", "submission_requirements"],
                    ["Technology Stack"     , "technology_stack"],
                    ["Final Deliverables"   , "final_deliverables"]
                ],
                [   // ds_marathon
                    
                ],
                [   // design_general
                    ["Design Banner"        , "design_banner"],
                    ["Challenge Summary"    , "challenge_summary"],
                    ["Challenge Objective"  , "challenge_objective"],
                    ["Project Background"   , "project_background"],
                    ["Workflow"             , "workflow"],
                    ["Users/Roles"          , "user_roles"],
                    ["Screens/Features"     , "screen_features"],
                    ["Form Factors"         , "form_factors"],
                    ["Operating Systems"    , "operating_systems"],
                    ["Branding Guidelines"  , "branding_guidelines"],
                    ["Design Assets"        , "design_assets"],
                    ["Judging Criteria"     , "judging_criteria"],
                    ["Final Deliverables"   , "final_deliverables"],
                ],
                [   // dev_fe
                ],
                [   // dev_general
                ],
                [   // qa_bughunt
                ]
            ];

async function fetch_snip(name)
{
    const response = await fetch('snips/' + name + '.md')
    const data = await response.text();
    snip[name] = "\n\n\n" + data;
}

async function fetch_all_snips()
{
    for(var i=0; i<snips.length; i++)
    {
        for(var j=0; j<snips[i].length; j++)
        {
            await fetch_snip(ctype[i] + "__" + snips[i][j][1]);
        }
    }

    console.log("All snips loaded!")
}