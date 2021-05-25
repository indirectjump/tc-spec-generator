var snip = [];

var ctype = ["architecture", "ds_marathon", "design_general", "dev_fe", "dev_general", "qa_bughunt"]
var snips =
    [
        [   // architecture
            ["Challenge Objective", "challenge_objective"],
            ["Project Background", "project_background"],
            ["Technology Stack", "technology_stack"],
            ["Submission Requirements", "submission_requirements"],
            ["Final Deliverables", "final_deliverables"]
        ],
        [   // ds_marathon
            ["Challenge Overview", "challenge_overview"],
            ["Dataset Details", "dataset_details"],
            ["Submission Format", "submission_format"],
            ["Scoring Details", "scoring_details"],
        ],
        [   // design_general
            ["Design Banner", "design_banner"],
            ["Challenge Summary", "challenge_summary"],
            ["Challenge Objective", "challenge_objective"],
            ["Project Background", "project_background"],
            ["Workflow", "workflow"],
            ["Users/Roles", "user_roles"],
            ["Screens/Features", "screen_features"],
            ["Form Factors", "form_factors"],
            ["Operating Systems", "operating_systems"],
            ["Branding Guidelines", "branding_guidelines"],
            ["Design Assets", "design_assets"],
            ["Judging Criteria", "judging_criteria"],
            ["Final Deliverables", "final_deliverables"],
        ],
        [   // dev_fe
            ["Challenge Overview", "challenge_overview"],
            ["Project Background", "project_background"],
            ["General Requirements", "general_requirements"],
            ["Platform Requirements", "platform_requirements"],
            ["Individual Requirements", "individual_requirements"],
            ["Deployment & Maintainability", "deployment_maintainability"],
            ["HTML Requirements", "html_requirements"],
            ["CSS Requirements", "css_requirements"],
            ["JS Requirements ", "js_requirements"],
            ["Framework Specific Requirements", "framework_specific_requirements"],
            ["Licenses & Attribution", "licenses_and_attribution"],
        ],
        [   // dev_general
            ["Challenge Objectives", "challenge_objectives"],
            ["Project Background", "project_background"],
            ["Technology Stack", "technology_stack"],
            ["Code Access", "code_access"],
            ["Individual Requirements", "individual_requirements"],
            ["UI Requirements", "ui_requirements"],
            ["Service Requirements", "service_requirements"],
            ["Bug Fixes", "bug_fixes"],
            ["Deployment Guide and Validation Document", "deployment_guide"],
            ["Important Note", "important_note"],
            ["What to Submit", "what_to_submit"],
        ],
        [   // qa_bughunt
            ["Challenge Objectives", "challenge_objectives"],
            ["About the Application", "about_the_application"],
            ["Assets", "assets"],
            ["What to Test (Scope)", "scope"],
            ["How to create new bug report", "create_bug_report"],
            ["Issue Reporting Guidelines", "issue_reporting_guidelines"],
            ["Issue Weights and Scoring", "issue_weights_and_scoring"],
            ["Important Notice", "important_notice"],
            ["Final Deliverables", "final_deliverables"],
        ]
    ];

async function fetch_snip(name) {
    const response = await fetch('snips/' + name + '.md')
    const data = await response.text();
    snip[name] = "\n\n\n" + data;
}

async function fetch_all_snips() {
    for (var i = 0; i < snips.length; i++) {
        for (var j = 0; j < snips[i].length; j++) {
            await fetch_snip(ctype[i] + "__" + snips[i][j][1]);
        }
    }

    console.log("All snips loaded!")
}

function add_snip(title, name) {
    return `
    <div class="form-check form-switch">
                <input class="form-check-input" type="checkbox" name="` + name + `" onchange="refresh()">
                <label class="form-check-label">
                    ` + title + `
                </label>
            </div>
            `;
}

function refresh() {
    document.getElementById("output").value = "";

    for (var i = 0; i < snips.length; i++) {
        document.forms[ctype[i]].style.display = "none";
    }
    var md = "";

    var challenge_title = document.forms.spec_base.challenge_title.value;
    md += "# " + challenge_title;

    var challenge_type = document.forms.spec_base.challenge_type.selectedIndex;

    document.forms[ctype[challenge_type]].style.display = "block";

    var i = challenge_type;
    for (var j = 0; j < snips[i].length; j++) {
        if (document.forms[ctype[i]][snips[i][j][1]].checked) {
            md += snip[ctype[i] + "__" + snips[i][j][1]];
        }
    }


    document.forms.markdown.output.value = md;

}

function init() {
    fetch_all_snips();

    for (var i = 0; i < snips.length; i++) {
        for (var j = 0; j < snips[i].length; j++) {
            document.forms[ctype[i]].innerHTML += add_snip(snips[i][j][0], snips[i][j][1]);
        }
    }
    refresh();

    document.getElementById('copybtn').addEventListener('click', function (clicked) {
        return function () {
            if (!clicked) {
                var last = this.innerHTML;
                this.innerHTML = 'Markdown copied..';
                clicked = true;
                setTimeout(function () {
                    this.innerHTML = last;
                    clicked = false;
                    
                    if (window.getSelection) {
                        window.getSelection().removeAllRanges();
                    } else if (document.selection) {
                        document.selection.empty();
                    }
                }.bind(this), 2000);
            }
        };
    }(false), this);
}

function copy() {
    let textarea = document.getElementById("output");
    textarea.select();
    document.execCommand("copy");
}

