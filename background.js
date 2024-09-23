const blockListUrls = [
  "https://raw.githubusercontent.com/AdguardTeam/FiltersRegistry/master/filters/filter_2_Base/filter.txt",
  "https://raw.githubusercontent.com/AdguardTeam/FiltersRegistry/master/filters/filter_14_Annoyances/filter.txt",
  "https://raw.githubusercontent.com/AdguardTeam/FiltersRegistry/master/filters/filter_9_Spanish/filter.txt",
  "https://raw.githubusercontent.com/AdguardTeam/FiltersRegistry/master/filters/filter_10_Useful/filter.txt",
  "https://raw.githubusercontent.com/Kees1958/W3C_annual_most_used_survey_blocklist/refs/heads/master/World%20most%20used%20advertising%20and%20tracking%20networks.txt",
  "https://raw.githubusercontent.com/Kees1958/W3C_annual_most_used_survey_blocklist/refs/heads/master/URL_tracking_parameters.txt",
  "https://raw.githubusercontent.com/Kees1958/W3C_annual_most_used_survey_blocklist/refs/heads/master/EU_US_MV3_most_common_ad%2Btracking_networks.txt",
  "https://raw.githubusercontent.com/Kees1958/W3C_annual_most_used_survey_blocklist/refs/heads/master/youtube_AG_rules.txt",
  "https://raw.githubusercontent.com/PolishFiltersTeam/KADhosts/master/KADhosts.txt",
  "https://raw.githubusercontent.com/FadeMind/hosts.extras/master/add.Spam/hosts",
  "https://v.firebog.net/hosts/static/w3kbl.txt",
  "https://adaway.org/hosts.txt",
  "https://v.firebog.net/hosts/AdguardDNS.txt",
  "https://v.firebog.net/hosts/Admiral.txt",
  "https://raw.githubusercontent.com/anudeepND/blacklist/master/adservers.txt",
  "https://v.firebog.net/hosts/Easylist.txt",
  "https://pgl.yoyo.org/adservers/serverlist.php?hostformat=hosts&showintro=0&mimetype=plaintext",
  "https://raw.githubusercontent.com/FadeMind/hosts.extras/master/UncheckyAds/hosts",
  "https://raw.githubusercontent.com/bigdargon/hostsVN/master/hosts",
  "https://v.firebog.net/hosts/Easyprivacy.txt",
  "https://v.firebog.net/hosts/Prigent-Ads.txt",
  "https://raw.githubusercontent.com/FadeMind/hosts.extras/master/add.2o7Net/hosts",
  "https://raw.githubusercontent.com/crazy-max/WindowsSpyBlocker/master/data/hosts/spy.txt",
  "https://hostfiles.frogeye.fr/firstparty-trackers-hosts.txt",
  "https://raw.githubusercontent.com/DandelionSprout/adfilt/master/Alternate%20versions%20Anti-Malware%20List/AntiMalwareHosts.txt",
  "https://osint.digitalside.it/Threat-Intel/lists/latestdomains.txt",
  "https://v.firebog.net/hosts/Prigent-Crypto.txt",
  "https://raw.githubusercontent.com/FadeMind/hosts.extras/master/add.Risk/hosts",
  "https://bitbucket.org/ethanr/dns-blacklists/raw/8575c9f96e5b4a1308f2f12394abd86d0927a4a0/bad_lists/Mandiant_APT1_Report_Appendix_D.txt",
  "https://phishing.army/download/phishing_army_blocklist_extended.txt",
  "https://gitlab.com/quidsup/notrack-blocklists/raw/master/notrack-malware.txt",
  "https://v.firebog.net/hosts/RPiList-Malware.txt",
  "https://v.firebog.net/hosts/RPiList-Phishing.txt",
  "https://raw.githubusercontent.com/Spam404/lists/master/main-blacklist.txt",
  "https://raw.githubusercontent.com/AssoEchap/stalkerware-indicators/master/generated/hosts",
  "https://urlhaus.abuse.ch/downloads/hostfile/",
  "https://raw.githubusercontent.com/AdguardTeam/AdguardFilters/refs/heads/master/BaseFilter/sections/adservers_firstparty.txt",
  "https://raw.githubusercontent.com/AdguardTeam/AdguardFilters/refs/heads/master/BaseFilter/sections/adservers.txt",
  "https://raw.githubusercontent.com/AdguardTeam/AdguardFilters/refs/heads/master/BaseFilter/sections/antiadblock.txt",
  "https://raw.githubusercontent.com/AdguardTeam/AdguardFilters/refs/heads/master/BaseFilter/sections/content_blocker.txt",
  "https://easylist.to/easylist/easyprivacy.txt",
  "https://secure.fanboy.co.nz/fanboy-annoyance.txt",
  "https://raw.githubusercontent.com/Kees1958/W3C_annual_most_used_survey_blocklist/refs/heads/master/EU_US_MV3_most_common_ad%2Btracking_networks.txt",
  "https://raw.githubusercontent.com/Kees1958/W3C_annual_most_used_survey_blocklist/refs/heads/master/Personal_Blocklist_ABP.txt",
  "https://raw.githubusercontent.com/Kees1958/W3C_annual_most_used_survey_blocklist/refs/heads/master/URL_tracking_parameters.txt",
  "https://raw.githubusercontent.com/Kees1958/W3C_annual_most_used_survey_blocklist/refs/heads/master/World%20most%20used%20advertising%20and%20tracking%20networks.txt",
  "https://raw.githubusercontent.com/Kees1958/W3C_annual_most_used_survey_blocklist/refs/heads/master/youtube_AG_rules.txt",
  "https://raw.githubusercontent.com/AdguardTeam/FiltersRegistry/refs/heads/master/filters/filter_9_Spanish/filter.txt",
  "https://raw.githubusercontent.com/yokoffing/filterlists/refs/heads/main/privacy_essentials.txt",
  "https://raw.githubusercontent.com/yokoffing/filterlists/refs/heads/main/click2load.txt",
  "https://raw.githubusercontent.com/hagezi/dns-blocklists/refs/heads/main/adblock/pro.mini.txt",
  "https://raw.githubusercontent.com/yokoffing/filterlists/refs/heads/main/annoyance_list.txt",
  "https://raw.githubusercontent.com/iam-py-test/uBlock-combo/refs/heads/main/list.txt",
 "https://raw.githubusercontent.com/AdguardTeam/FiltersRegistry/master/filters/filter_2_Base/filter.txt",
  "https://raw.githubusercontent.com/AdguardTeam/FiltersRegistry/master/filters/filter_4_Social/filter.txt",
  "https://raw.githubusercontent.com/AdguardTeam/FiltersRegistry/master/filters/filter_17_TrackParam/filter.txt",
  "https://raw.githubusercontent.com/AdguardTeam/FiltersRegistry/master/filters/filter_14_Annoyances/filter.txt",
  "https://raw.githubusercontent.com/AdguardTeam/FiltersRegistry/master/filters/filter_18_Annoyances_Cookies/filter.txt",
  "https://raw.githubusercontent.com/AdguardTeam/FiltersRegistry/master/filters/filter_22_Annoyances_Widgets/filter.txt",
  "https://raw.githubusercontent.com/AdguardTeam/FiltersRegistry/master/filters/filter_10_Useful/filter.txt"
];

// Check if blockListUrls is already declared
if (typeof blockListUrls === 'undefined') {
  const blockListUrls = [
    // Your list of URLs

  ];
}

// Function to fetch and process block lists
async function generateRules() {
  let rules = [];
  let idCounter = 1;

  for (const url of blockListUrls) {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const text = await response.text();

      // Process each line of the blocklist
      text.split("\n").forEach(line => {
        // Skip empty lines and comments
        if (line && !line.startsWith("#")) {
          const domain = line.trim().replace(/^(0\.0\.0\.0|127\.0\.0\.1)\s+/, "");
          if (domain) {
            // Ensure the URL filter is properly formatted
            const formattedDomain = `||${domain}^`;
            rules.push({
              id: idCounter++,
              priority: 1,
              action: { type: "block" },
              condition: {
                urlFilter: formattedDomain,
                resourceTypes: ["main_frame", "sub_frame", "script", "image", "xmlhttprequest"]
              }
            });
          }
        }
      });
    } catch (error) {
      console.error(`Failed to fetch or process ${url}: ${error}`);
    }
  }

  console.log(`Generated ${rules.length} rules from blocklists.`);
  return rules;
}

// Load the rules into declarativeNetRequest
generateRules().then(rules => {
  if (rules.length > 0) {
    chrome.declarativeNetRequest.updateDynamicRules({
      addRules: rules,
      removeRuleIds: rules.map(rule => rule.id)
    }, () => {
      if (chrome.runtime.lastError) {
        console.error(`Failed to update dynamic rules: ${chrome.runtime.lastError}`);
      } else {
        console.log(`Successfully added ${rules.length} new rules.`);
      }
    });
  } else {
    console.log("No rules to add.");
  }
});
