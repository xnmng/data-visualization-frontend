const mockSignalSchema = [
  {
    name: "tt_panel1_daily",
    fields: {
      ticker: ["tt_panel1_daily1", "tt_panel1_daily2", "tt_panel1_daily3"],
    },
  },
  {
    name: "tt_panel2_daily",
    fields: {
      ticker: ["tt_panel2_daily1", "tt_panel2_daily2", "tt_panel2_daily3"],
    },
  },
  {
    name: "tt_panel3_daily",
    fields: {
      ticker: ["tt_panel3_daily1", "tt_panel3_daily2", "tt_panel3_daily3"],
    },
  },
  {
    name: "tt_panel1_daily_yoy",
    fields: {
      ticker: [
        "tt_panel1_daily_yoy1",
        "tt_panel1_daily_yoy2",
        "tt_panel1_daily_yoy3",
      ],
    },
  },
  {
    name: "tt_panel2_daily_yoy",
    fields: {
      ticker: [
        "tt_panel2_daily_yoy1",
        "tt_panel2_daily_yoy2",
        "tt_panel2_daily_yoy3",
      ],
    },
  },
  {
    name: "tt_panel3_daily_yoy",
    fields: {
      ticker: [
        "tt_panel3_daily_yoy1",
        "tt_panel3_daily_yoy2",
        "tt_panel3_daily_yoy3",
      ],
    },
  },

  {
    name: "tt_panel1_weekly",
    fields: {
      ticker: ["tt_panel1_weekly1", "tt_panel1_weekly2", "tt_panel1_weekly3"],
    },
  },
  {
    name: "tt_panel2_weekly",
    fields: {
      ticker: ["tt_panel2_weekly1", "tt_panel2_weekly2", "tt_panel2_weekly3"],
    },
  },
  {
    name: "tt_panel3_weekly",
    fields: {
      ticker: ["tt_panel3_weekly1", "tt_panel3_weekly2", "tt_panel3_weekly3"],
    },
  },
  {
    name: "tt_panel1_weekly_yoy",
    fields: {
      ticker: [
        "tt_panel1_weekly_yoy1",
        "tt_panel1_weekly_yoy2",
        "tt_panel1_weekly_yoy3",
      ],
    },
  },
  {
    name: "tt_panel2_weekly_yoy",
    fields: {
      ticker: [
        "tt_panel2_weekly_yoy1",
        "tt_panel2_weekly_yoy2",
        "tt_panel2_weekly_yoy3",
      ],
    },
  },
  {
    name: "tt_panel3_weekly_yoy",
    fields: {
      ticker: [
        "tt_panel3_weekly_yoy1",
        "tt_panel3_weekly_yoy2",
        "tt_panel3_weekly_yoy3",
      ],
    },
  },

  {
    name: "tt_panel1_monthly",
    fields: {
      ticker: [
        "tt_panel1_monthly1",
        "tt_panel1_monthly2",
        "tt_panel1_monthly3",
      ],
    },
  },
  {
    name: "tt_panel2_monthly",
    fields: {
      ticker: [
        "tt_panel2_monthly1",
        "tt_panel2_monthly2",
        "tt_panel2_monthly3",
      ],
    },
  },
  {
    name: "tt_panel3_monthly",
    fields: {
      ticker: [
        "tt_panel3_monthly1",
        "tt_panel3_monthly2",
        "tt_panel3_monthly3",
      ],
    },
  },
  {
    name: "tt_panel1_monthly_yoy",
    fields: {
      ticker: [
        "tt_panel1_monthly_yoy1",
        "tt_panel1_monthly_yoy2",
        "tt_panel1_monthly_yoy3",
      ],
    },
  },
  {
    name: "tt_panel2_monthly_yoy",
    fields: {
      ticker: [
        "tt_panel2_monthly_yoy1",
        "tt_panel2_monthly_yoy2",
        "tt_panel2_monthly_yoy3",
      ],
    },
  },
  {
    name: "tt_panel3_monthly_yoy",
    fields: {
      ticker: [
        "tt_panel3_monthly_yoy1",
        "tt_panel3_monthly_yoy2",
        "tt_panel3_monthly_yoy3",
      ],
    },
  },
  {
    name: "tt_panel1_quarterly",
    fields: {
      ticker: [
        "tt_panel1_quarterly1",
        "tt_panel1_quarterly2",
        "tt_panel1_quarterly3",
      ],
    },
  },
  {
    name: "tt_panel2_quarterly",
    fields: {
      ticker: [
        "tt_panel2_quarterly1",
        "tt_panel2_quarterly2",
        "tt_panel2_quarterly3",
      ],
    },
  },
  {
    name: "tt_panel3_quarterly",
    fields: {
      ticker: [
        "tt_panel3_quarterly1",
        "tt_panel3_quarterly2",
        "tt_panel3_quarterly3",
      ],
    },
  },
  {
    name: "tt_panel1_quarterly_yoy",
    fields: {
      ticker: [
        "tt_panel1_quarterly_yoy1",
        "tt_panel1_quarterly_yoy2",
        "tt_panel1_quarterly_yoy3",
      ],
    },
  },
  {
    name: "tt_panel2_quarterly_yoy",
    fields: {
      ticker: [
        "tt_panel2_quarterly_yoy1",
        "tt_panel2_quarterly_yoy2",
        "tt_panel2_quarterly_yoy3",
      ],
    },
  },
  {
    name: "tt_panel3_quarterly_yoy",
    fields: {
      ticker: [
        "tt_panel3_quarterly_yoy1",
        "tt_panel3_quarterly_yoy2",
        "tt_panel3_quarterly_yoy3",
      ],
    },
  },
  {
    name: "ardb_daily",
    fields: {
      ticker: ["ardb_daily1", "ardb_daily2", "ardb_daily3"],
      merchant_ticker: ["ardb_ticker1", "ardb_ticker2", "ardb_ticker3"],
      generation: [
        "ardb_gen1",
        "ardb_gen2",
        "ardb_gen3",
        "ardb_gen4",
        "ardb_gen5",
      ],
    },
  },
  {
    name: "cets_daily",
    fields: {
      ticker: ["cets_daily1", "cets_daily2", "cets_daily3"],
    },
  },
  {
    name: "edrp_daily",
    fields: {
      ticker: ["edrp_daily1", "edrp_daily2", "edrp_daily3"],
      merchant_name: [
        "edrp_merchant_name1",
        "edrp_merchant_name2",
        "edrp_merchant_name3",
      ],
    },
  },
  {
    name: "ttsub_daily",
    fields: {
      ticker: ["ttsub_daily1", "ttsub_daily2", "ttsub_daily3"],
      gender: ["gender1", "gender2", "gender3"],
      birth_year: ["birth_year1", "birth_year2", "birth_year3"],
      city_trans: ["city_trans1", "city_trans2", "city_trans3"],
      state_trans: ["state_trans1", "state_trans2", "state_trans3"],
      msa_trans: ["msa_trans1", "msa_trans2", "msa_trans3"],
      cbsa_trans: ["cbsa_trans1", "cbsa_trans2", "cbsa_trans3"],
    },
  },
  {
    name: "ttvts_daily",
    fields: {
      ticker: ["ttvts_daily1", "ttvts_daily2", "ttvts_daily3"],
    },
  },
  {
    name: "ttvts_weekly",
    fields: {
      ticker: ["ttvts_weekly1", "ttvts_weekly2", "ttvts_weekly3"],
    },
  },
  {
    name: "ttvts_weekly_yoy",
    fields: {
      ticker: ["ttvts_weekly_yoy1", "ttvts_weekly_yoy2", "ttvts_weekly_yoy3"],
    },
  },
  {
    name: "ttvts_monthly",
    fields: {
      ticker: ["ttvts_monthly1", "ttvts_monthly2", "ttvts_monthly3"],
    },
  },
  {
    name: "ttvts_monthly_yoy",
    fields: {
      ticker: [
        "ttvts_monthly_yoy1",
        "ttvts_monthly_yoy2",
        "ttvts_monthly_yoy3",
      ],
    },
  },
  {
    name: "ttvts_quarterly",
    fields: {
      ticker: ["ttvts_quarterly1", "ttvts_quarterly2", "ttvts_quarterly3"],
    },
  },
  {
    name: "ttvts_quarterly_yoy",
    fields: {
      ticker: [
        "ttvts_quarterly_yoy1",
        "ttvts_quarterly_yoy2",
        "ttvts_quarterly_yoy3",
      ],
    },
  },
  {
    name: "klpd_daily",
    fields: {
      ticker: ["klpd_daily1", "klpd_daily2", "klpd_daily3"],
    },
  },
  {
    name: "atap_rank_google_play_daily",
    fields: {
      ticker: [
        "atap_rank_google_play_daily1",
        "atap_rank_google_play_daily2",
        "atap_rank_google_play_daily3",
      ],
    },
  },
  {
    name: "atap_rank_itunes_connect_daily",
    fields: {
      ticker: [
        "atap_rank_itunes_connect_daily1",
        "atap_rank_itunes_connect_daily2",
        "atap_rank_itunes_connect_daily3",
      ],
    },
  },
  {
    name: "atap_est_google_play_daily",
    fields: {
      ticker: [
        "atap_est_google_play_daily1",
        "atap_est_google_play_daily2",
        "atap_est_google_play_daily3",
      ],
    },
  },
  {
    name: "atap_est_itunes_connect_daily",
    fields: {
      ticker: [
        "atap_est_itunes_connect_daily1",
        "atap_est_itunes_connect_daily2",
        "atap_est_itunes_connect_daily3",
      ],
    },
  },
];

async function oldMockGetSignalSchema() {
  await new Promise((r) => setTimeout(r, 1000)); // to mock API call
  return mockSignalSchema;
}

export default oldMockGetSignalSchema;
