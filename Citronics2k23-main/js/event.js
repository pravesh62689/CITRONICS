document.getElementById("dynamicfetch").style.top = "-30000px";

// event bar toggleing coding for the device
let toggle = (id) => {
  if (id.style.display == "none") {
    id.style.display = "block";
  } else {
    id.style.display = "none";
  }
};

// toggler features
let button = document.getElementsByClassName("card_btn");
for (items of button) {

    items.addEventListener('click', (e) => {
          if (e.target.id == "entertainment_btn") {
                toggle(document.getElementById("entertainment_menu"))
          }
          if (e.target.id == "mechtronics_btn") {
                toggle(document.getElementById("mechatronic_menu"))
          }
          if (e.target.id == "menagement_btn") {
                toggle(document.getElementById("managment_menu"))
          }
          if (e.target.id == "civil_btn") {
                toggle(document.getElementById("civil_menu"))
          }
          if (e.target.id == "robotics_btn") {
                toggle(document.getElementById("robotic_menu"))
          }
          if (e.target.id == "citronics_special_btn") {
                toggle(document.getElementById("citronicsspecial_menu"))
          }

          if (e.target.id == "pharma_btn") {
                toggle(document.getElementById("pharma_menu"))
          }

          if (e.target.id == "software_btn") {
                toggle(document.getElementById("software_menu"))
          }

          if (e.target.id == "national_btn") {
                toggle(document.getElementById("national_menu"))
          }
    })
}

// fetching thte details in the comonnent
let fetchobj = (obj, margin = 0) => {
  let t = 0;
  secondprice = document.getElementById("secondprice");
  firstprice = document.getElementById("firstprice");
  thirdprice = document.getElementById("thirdprice");
  description = document.getElementById("description");
  rfe = document.getElementById("rprice");
  tittle = document.getElementById("title");
  consolation = document.getElementById("Consolation_prices");

  // setting the document position values
  obj.prizemoney.firstprice == null
    ? (document.getElementById("f_price").style.display = "none")
    : (document.getElementById("f_price").style.display = "block");
  obj.prizemoney.secondprice == null
    ? (document.getElementById("s_price").style.display = "none")
    : (document.getElementById("s_price").style.display = "block");
  obj.prizemoney.thirdprice == null
    ? (document.getElementById("t_price").style.display = "none")
    : (document.getElementById("t_price").style.display = "block");
  obj.prizemoney.thirdprice == null
    ? (document.getElementById("t_price").style.display = "none")
    : (document.getElementById("t_price").style.display = "block");
  obj.prizemoney.c_price == null
    ? (document.getElementById("c_price").style.display = "none")
    : (document.getElementById("c_price").style.display = "block");

  tittle.innerText = obj.tittle;
  description.innerText = obj.description;
  firstprice.innerText = obj.prizemoney.firstprice;
  secondprice.innerText = obj.prizemoney.secondprice;
  thirdprice.innerText = obj.prizemoney.thirdprice;
  rfe.innerText = obj.registrationfee;
  consolation = obj.prizemoney.c_price;

  obj.guidelines.forEach((guideline) => {
    t++;
    let div = document.createElement("div");
    div.className = "guideline_guideline";
    div.innerText = `  ${guideline}`;
    document.getElementById("guideline").appendChild(div);
  });

  document.getElementById("core1").innerText = obj.cordinator.first;
  document.getElementById("core2").innerText = obj.cordinator.second;
  document.getElementById("core3").innerText = obj.cordinator.third;
  document.getElementById("dynamicfetch").style.top = "120px";
  // document.getElementById("arrow_id").style.display="block";
  document.getElementById(
    "innercontainer_arrow"
  ).style.marginTop = `${margin}px`;
  document.getElementById("ham_id").style.zIndex = "1";
  document.getElementById("ham_id").style.backgroundColor = "rgb(0 0 0 / 44%)";
};

// taking the information form the content and supplying object
for (item of document.getElementsByClassName("span_class")) {
  item.addEventListener("click", (e) => {
    id = e.target.id;
    console.log(id);
    body = document.body.style.width;
    // ---------- Entertainment -----------
    if (id == "bandwar_id") {
      //     document.getElementById("allcore").innerText =
      // "Miss. Pragya bhopche [Pho.no.9098605105] and Mr.  Arjun patidar [Pho.no.9926285954]";
    fetchobj(data.entertainment.bandwar);
    }
    if (id == "openmic_id") {
      // document.getElementById("allcore").innerText =
        "Miss. Pragya bhopche [Pho.no.9098605105] and Mr.  Arjun patidar [Pho.no.9926285954]";
      fetchobj(data.entertainment.openmic);
    }
    if (id == "dance_solo") {
      // document.getElementById("allcore").innerText =
        "Miss. Pragya bhopche       and Mr.  Arjun patidar ";
      fetchobj(data.entertainment.dance_solo);
    }
    if (id == "dance_duo") {
      // document.getElementById("allcore").innerText =
        "Miss. Pragya bhopche       and Mr.  Arjun patidar ";
      fetchobj(data.entertainment.dance_duo);
    }


    //----------- Mechnanical-------------
    if (id == "cad_id") {
      // document.getElementById("allcore").innerText =
        `Mr. Ritik jaiswal[Pho.no.81200 27119] Mr. Harsh Pahadiya [Pho.no.83051 0448]`;
      fetchobj(data.mechanical.cad);
    }
    if (id == "fun_cart") {
      // document.getElementById("allcore").innerText =
      //   "Mr. Ritik jaiswal[Pho.no.81200 27119] & Mr. Harsh Pahadiya [Pho.no.83051 0448]";
      fetchobj(data.mechanical.fun_cart);
    }
    if (id == "slow_cycle") {
      // document.getElementById("allcore").innerText =
        "Mr. Ritik jaiswal[Pho.no.81200 27119] & Mr. Harsh Pahadiya [Pho.no.83051 0448]";
      fetchobj(data.mechanical.slow_cycle);
    }

    // ------------Management-------------
    if (id == "snakeladder_id") {
      // document.getElementById("allcore").innerText =
        "Mr. Arpit Sharma , Mr. Harshit Malakar , Mr . Nirmal Patidar";
      fetchobj(data.management.snakeladder, 0);
    }
    if (id == "master_chef") {
      // document.getElementById("allcore").innerText =
        "Mr. Arpit Sharma , Mr. Harshit Malakar , Mr . Nirmal Patidar";
      fetchobj(data.management.master_chef, 0);
    }
    if (id == "blindfold") {
      // document.getElementById("allcore").innerText =
        "Mr. Arpit Sharma , Mr. Harshit Malakar , Mr . Nirmal Patidar";
      fetchobj(data.management.blindfold, 0);
    }
    if (id == "rampwalk_solo") {
      // document.getElementById("allcore").innerText =
        "Mr. Arpit Sharma , Mr. Harshit Malakar , Mr . Nirmal Patidar";
      fetchobj(data.management.rampwalk_solo, 0);
    }
    if (id == "rampwalk_dual") {
      // document.getElementById("allcore").innerText =
        "Mr. Arpit Sharma , Mr. Harshit Malakar , Mr . Nirmal Patidar";
      fetchobj(data.management.rampwalk_dual, 0);
    }
    if (id == "treasure_hunt") {
      // document.getElementById("allcore").innerText =
        "Mr. Arpit Sharma , Mr. Harshit Malakar , Mr . Nirmal Patidar";
      fetchobj(data.management.treasure_hunt, 0);
    }
    if (id == "fun_funda") {
      // document.getElementById("allcore").innerText =
        "Mr. Arpit Sharma , Mr. Harshit Malakar , Mr . Nirmal Patidar";
      fetchobj(data.management.fun_funda, 0);
    }
    if (id == "bollywood_bonaza") {
      // document.getElementById("allcore").innerText =
        "Mr. Arpit Sharma , Mr. Harshit Malakar , Mr . Nirmal Patidar";
      fetchobj(data.management.bollywood_bonaza, 0);
    }

    // ------------Civil-----------------
    if (id == "ttt_id") {
      // document.getElementById("allcore").innerText =
        "Mr. Ritik Prajapati [9977930622] and Mr. Ritik Sharma [6266190929]";
      fetchobj(data.civil.ttt);
    }
    if (id == "jengablock_id") {
      // document.getElementById("allcore").innerText =
        "MR. Ritik Prajapati [9977930622] and Mr. Ritik Sharma [6266190929]";
      fetchobj(data.civil.jengablock);
    }
    if (id == "arcbridge_id") {
      // document.getElementById("allcore").innerText =
        "Mr. Ritik Prajapati [9977930622] and Mr. Ritik Sharma [6266190929]";
      fetchobj(data.civil.archbridge);
    }
    if (id == "draw_up") {
      // document.getElementById("allcore").innerText =
        "Mr. Ritik Prajapati [9977930622] and Mr. Ritik Sharma [6266190929]";
      fetchobj(data.civil.draw_up);
    }
    if (id == "bridge_mania") {
      // document.getElementById("allcore").innerText =
        "Mr. Ritik Prajapati [9977930622] and Mr. Ritik Sharma [6266190929]";
      fetchobj(data.civil.bridge_mania);
    }

    // ------------Robotics-----------------
    if (id == "roborace_id") {
      // document.getElementById("allcore").innerText =
        "Mr. Ajay bangar [Pho.no.78694 76374] & Mr. Kailash choudhary [Pho.no.905 42300]";
      fetchobj(data.robotics.roborace, 0);
    }
    if (id == "robowar") {
      // document.getElementById("allcore").innerText =
        "Mr. Ajay bangar [Pho.no.78694 76374] & Mr. Kailash choudhary [Pho.no.905 42300]";
      fetchobj(data.robotics.robowar, 0);
    }
    if (id == "linefollwer_id") {
      // document.getElementById("allcore").innerText =
        "Mr. Ajay bangar [Pho.no.78694 76374] & Mr. Kailash choudhary [Pho.no.905 42300]";
      fetchobj(data.robotics.linefollower, 0);
    }
    if (id == "maze_solver") {
      // document.getElementById("allcore").innerText =
        "Mr. Ajay bangar [Pho.no.78694 76374] & Mr. Kailash choudhary [Pho.no.905 42300]";
      fetchobj(data.robotics.maze_solver, 0);
    }
    if (id == "pickplace_id") {
      // document.getElementById("allcore").innerText =
        "Mr. Ajay bangar [Pho.no.78694 76374] & Mr. Kailash choudhary [Pho.no.905 42300]";
      fetchobj(data.robotics.pickandplace, 0);
    }
    if (id == "Electronicjunkyard_id") {
      // document.getElementById("allcore").innerText =
        "Mr. Ajay bangar [Pho.no.78694 76374] & Mr. Kailash choudhary [Pho.no.905 42300]";
      fetchobj(data.robotics.Electronicjunkyard, 0);
    }

    
    //----------Pharma events-------------
    if (id == "pharma_mines_model") {
      if (document.body.clientWidth < 1300) {
        if (document.body.clientWidth < 665) {
          fetchobj(data.pharma.pharma_mines_model, 2175);
        } else {
          fetchobj(data.pharma.pharma_mines_model, 0);
        }
      } else {
        fetchobj(data.pharma.pharma_mines_model);
      }

      // document.getElementById("allcore").innerText =
        "Mr . Aman bundela [Pho.no.8962202886] ";
    }
    if (id == "Pharma_Mines_Poster") {
      if (document.body.clientWidth < 1300) {
        if (document.body.clientWidth < 665) {
          fetchobj(data.pharma.Pharma_Mines_Poster, 2175);
        } else {
          fetchobj(data.pharma.Pharma_Mines_Poster, 0);
        }
      } else {
        fetchobj(data.pharma.Pharma_Mines_Poster);
      }

      // document.getElementById("allcore").innerText =
        "Mr . Aman bundela [Pho.no.8962202886] ";
    }
    if (id == "musical_chair") {
      if (document.body.clientWidth < 1300) {
        if (document.body.clientWidth < 665) {
          fetchobj(data.pharma.musical_chair, 2175);
        } else {
          fetchobj(data.pharma.musical_chair, 0);
        }
      } else {
        fetchobj(data.pharma.musical_chair);
      }
      // document.getElementById("allcore").innerText =
        "Mr . Aman bundela [Pho.no.8962202886] ";
    }
    if (id == "pass_the_wire") {
      if (document.body.clientWidth < 1300) {
        if (document.body.clientWidth < 665) {
          fetchobj(data.pharma.pass_the_wire, 2175);
        } else {
          fetchobj(data.pharma.pass_the_wire, 0);
        }
      } else {
        fetchobj(data.pharma.pass_the_wire);
      }
      // document.getElementById("allcore").innerText =
        "Mr . Aman bundela [Pho.no.8962202886] ";
    }
    if (id == "music_voice") {
      if (document.body.clientWidth < 1300) {
        if (document.body.clientWidth < 665) {
          fetchobj(data.pharma.music_voice, 2175);
        } else {
          fetchobj(data.pharma.music_voice, 0);
        }
      } else {
        fetchobj(data.pharma.music_voice);
      }
      // document.getElementById("allcore").innerText =
        "Mr . Aman bundela [Pho.no.8962202886] ";
    }
    if (id == "selfie_booth") {
      if (document.body.clientWidth < 1300) {
        if (document.body.clientWidth < 665) {
          fetchobj(data.pharma.selfie_booth, 2175);
        } else {
          fetchobj(data.pharma.selfie_booth, 0);
        }
      } else {
        fetchobj(data.pharma.selfie_booth);
      }
      // document.getElementById("allcore").innerText =
        "Mr . Aman bundela [Pho.no.8962202886] ";
    }
    if (id == "lips_dont_lie") {
      if (document.body.clientWidth < 1300) {
        if (document.body.clientWidth < 665) {
          fetchobj(data.pharma.lips_dont_lie, 2175);
        } else {
          fetchobj(data.pharma.lips_dont_lie, 0);
        }
      } else {
        fetchobj(data.pharma.lips_dont_lie);
      }
      // document.getElementById("allcore").innerText =
        "Mr . Aman bundela [Pho.no.8962202886] ";
    }


    //--------Software----------
    if (id == "code_hunter") {
        if (document.body.clientWidth < 1300) {
          if (document.body.clientWidth < 665) {
            fetchobj(data.software.code_hunter, 0);
          } else {
            fetchobj(data.software.code_hunter, 0);
          }
        } else {
          fetchobj(data.software.code_hunter);
        }
  
        document.getElementById(
          "allcore"
        ).innerText = `Miss Harshita Parmar [Pho.no.88710623993] & Mr.Aman Kushwa[Pho.no.79743 92752]`;
    }
    if (id == "quizophile_id") {
        if (document.body.clientWidth < 1300) {
          if (document.body.clientWidth < 665) {
            fetchobj(data.software.quizophile, 0);
          } else {
            fetchobj(data.software.quizophile, 0);
          }
        } else {
          fetchobj(data.software.quizophile);
        }
  
        // document.getElementById(
        //   "allcore"
        // ).innerText = `Miss Harshita Parmar [Pho.no.88710623993] & Mr. Aman Kushwa[Pho.no.79743 92752]`;
    }
    if (id == "Beatthebug_id") {
        if (document.body.clientWidth < 1300) {
          if (document.body.clientWidth < 665) {
            fetchobj(data.software.Beatthebug, 0);
          } else {
            fetchobj(data.software.Beatthebug, 0);
          }
        } else {
          fetchobj(data.software.Beatthebug);
        }
        // document.getElementById(
        //   "allcore"
        // ).innerText = `Miss Harshita Parmar [Pho.no.88710623993] & Mr. Aman Kushwa[Pho.no.79743 92752]`;
    }
    if (id == "Bestgoogler_id") {
        if (document.body.clientWidth < 1300) {
          if (document.body.clientWidth < 665) {
            fetchobj(data.software.Bestgoogler, 0);
          } else {
            fetchobj(data.software.Bestgoogler, 0);
          }
        } else {
          fetchobj(data.software.Bestgoogler);
        }
  
        // document.getElementById(
        //   "allcore"
        // ).innerText = `Miss Harshita Parmar [Pho.no.88710623993] & Mr. Aman Kushwa[Pho.no.79743 92752]`;
    }
    if (id == "simongame_id") {
        // fetchobj(data.software.simongame)
        if (document.body.clientWidth < 1300) {
          if (document.body.clientWidth < 665) {
            fetchobj(data.software.simongame, 0);
          } else {
            fetchobj(data.software.simongame, 0);
          }
        } else {
          fetchobj(data.software.simongame);
        }
  
        // document.getElementById(
        //   "allcore"
        // ).innerText = `Miss Harshita Parmar [Pho.no.88710623993] & Mr. Aman Kushwa[Pho.no.79743 92752]`;
    }
    if (id == "inomanthan_id") {
        if (document.body.clientWidth < 1300) {
          if (document.body.clientWidth < 665) {
            fetchobj(data.software.innomanthan, 0);
          } else {
            fetchobj(data.software.innomanthan, 0);
          }
        } else {
          fetchobj(data.software.innomanthan);
        }
  
        // document.getElementById(
        //   "allcore"
        // ).innerText = `Miss Harshita Parmar [Pho.no.88710623993] & Mr. Aman Kushwa[Pho.no.79743 92752]`;
    }
    if (id == "web_mastery") {
        if (document.body.clientWidth < 1300) {
          if (document.body.clientWidth < 665) {
            fetchobj(data.software.web_mastery, 0);
          } else {
            fetchobj(data.software.web_mastery, 0);
          }
        } else {
          fetchobj(data.software.web_mastery);
        }
        // document.getElementById(
        //   "allcore"
        // ).innerText = `Miss Harshita Parmar [Pho.no.88710623993] & Mr. Aman Kushwa[Pho.no.79743 92752]`;
    }
    if (id == "jumble_keys") {
        if (document.body.clientWidth < 1300) {
          if (document.body.clientWidth < 665) {
            fetchobj(data.software.jumble_keys, 0);
          } else {
            fetchobj(data.software.jumble_keys, 0);
          }
        } else {
          fetchobj(data.software.jumble_keys);
        }
        // document.getElementById(
        //   "allcore"
        // ).innerText = `Miss Harshita Parmar [Pho.no.88710623993] & Mr. Aman Kushwa[Pho.no.79743 92752]`;
    }


    //---------Sports-------------
    if (id == "cricket_id") {
      if (document.body.clientWidth < 1300) {
        if (document.body.clientWidth < 665) {
          fetchobj(data.sports.Boxcricket, 0);
        } else {
          fetchobj(data.sports.Boxcricket, 0);
        }
      } else {
        fetchobj(data.sports.Boxcricket, 0);
      }
      // document.getElementById("allcore").innerText = "Miss. Anshika mishara";
    }
    if (id == "chess_id") {
      if (document.body.clientWidth < 1300) {
        if (document.body.clientWidth < 665) {
          fetchobj(data.sports.Chess, 300);
        } else {
          fetchobj(data.sports.Chess, 0);
        }
      } else {
        fetchobj(data.sports.Chess, 0);
      }

      // document.getElementById("allcore").innerText = "Miss. Anshika mishara";
    }
    if (id == "badminton") {
      if (document.body.clientWidth < 1300) {
        if (document.body.clientWidth < 665) {
          fetchobj(data.sports.badminton, 300);
        } else {
          fetchobj(data.sports.badminton, 0);
        }
      } else {
        fetchobj(data.sports.badminton, 0);
      }

      // document.getElementById("allcore").innerText = "Miss. Anshika mishara";
    }
    if (id == "carrom") {
      if (document.body.clientWidth < 1300) {
        if (document.body.clientWidth < 665) {
          fetchobj(data.sports.carrom, 300);
        } else {
          fetchobj(data.sports.carrom, 0);
        }
      } else {
        fetchobj(data.sports.carrom, 0);
      }

      // document.getElementById("allcore").innerText = "Miss. Anshika mishara";
    }
    if (id == "tug_of_war") {
      if (document.body.clientWidth < 1300) {
        if (document.body.clientWidth < 665) {
          fetchobj(data.sports.tug_of_war, 300);
        } else {
          fetchobj(data.sports.tug_of_war, 0);
        }
      } else {
        fetchobj(data.sports.tug_of_war, 0);
      }

      // document.getElementById("allcore").innerText = "Miss. Anshika mishara";
    }

// ---------------Roadies-----------
    if (id == "roadies") {
      if (document.body.clientWidth < 1300) {
        if (document.body.clientWidth < 665) {
          fetchobj(data.Roadies.roadies, 300);
        } else {
          fetchobj(data.Roadies.roadies, 0);
        }
      } else {
        fetchobj(data.Roadies.roadies, 0);
      }

      // document.getElementById("allcore").innerText = "Miss. Anshika mishara";
    }

// --------Photography---------
if (id == "reel") {
  if (document.body.clientWidth < 1300) {
    if (document.body.clientWidth < 665) {
      fetchobj(data.photography.reel, 0);
    } else {
      fetchobj(data.photography.reel, 0);
    }
  } else {
    fetchobj(data.photography.reel, 0);
  }
  // document.getElementById("allcore").innerText = "Mr . Pranav singh";
}
if (id == "dslr") {
  if (document.body.clientWidth < 1300) {
    if (document.body.clientWidth < 665) {
      fetchobj(data.photography.dslr, 0);
    } else {
      fetchobj(data.photography.dslr, 0);
    }
  } else {
    fetchobj(data.photography.dslr, 0);
  }
  // document.getElementById("allcore").innerText = " Mr. Pranav singh";
}
if (id == "mobile") {
  if (document.body.clientWidth < 1300) {
    if (document.body.clientWidth < 665) {
      fetchobj(data.photography.mobile, 0);
    } else {
      fetchobj(data.photography.mobile, 0);
    }
  } else {
    fetchobj(data.photography.mobile, 0);
  }
  // document.getElementById("allcore").innerText = " Mr. Pranav singh";
}

// ------------Spot Event----------
    if (id == "rongoli_id") {
      if (document.body.clientWidth < 1300) {
        if (document.body.clientWidth < 665) {
          fetchobj(data.onthespotevents.rangoli, 0);
        } else {
          fetchobj(data.onthespotevents.rangoli, 0);
        }
      } else {
        fetchobj(data.onthespotevents.rangoli, 0);
      }
      // document.getElementById("allcore").innerText =
        "Mr. Kunal gourav [Ph.no.81209 51155]";
    }
    if (id == "handleg_id") {
      if (document.body.clientWidth < 1300) {
        if (document.body.clientWidth < 665) {
          fetchobj(data.onthespotevents.handleg, 0);
        } else {
          fetchobj(data.onthespotevents.handleg, 0);
        }
      } else {
        fetchobj(data.onthespotevents.handleg, 0);
      }
      // document.getElementById("allcore").innerText =
        "Mr. Kunal gourav [Pho.no.81209 51155]";
    }
    if (id == "ball_roll_challenge") {
      if (document.body.clientWidth < 1300) {
        if (document.body.clientWidth < 665) {
          fetchobj(data.onthespotevents.ball_roll_challenge, 0);
        } else {
          fetchobj(data.onthespotevents.ball_roll_challenge, 0);
        }
      } else {
        fetchobj(data.onthespotevents.ball_roll_challenge, 0);
      }

      // document.getElementById("allcore").innerText =
        "Mr. Kunal gourav [Ph.no.81209 51155]";
    }
    if (id == "soda_can_roll") {
      if (document.body.clientWidth < 1300) {
        if (document.body.clientWidth < 665) {
          fetchobj(data.onthespotevents.soda_can_roll, 0);
        } else {
          fetchobj(data.onthespotevents.soda_can_roll, 0);
        }
      } else {
        fetchobj(data.onthespotevents.soda_can_roll, 0);
      }
      // document.getElementById("allcore").innerText =
        "Mr. Kunal gourav [Ph.no.81209 51155]";
    }
    if (id == "aeroplanetoss_id") {
      if (document.body.clientWidth < 1300) {
        if (document.body.clientWidth < 665) {
          fetchobj(data.onthespotevents.aeroplanetoss_id, 0);
        } else {
          fetchobj(data.onthespotevents.aeroplanetoss_id, 0);
        }
      } else {
        fetchobj(data.onthespotevents.aeroplanetoss_id, 0);
      }

      // document.getElementById("allcore").innerText =
        "Mr. Kunal gourav [Ph.no.81209 51155]";
    }
    if (id == "ballon_cup_challenge") {
      if (document.body.clientWidth < 1300) {
        if (document.body.clientWidth < 665) {
          fetchobj(data.onthespotevents.ballon_cup_challenge, 0);
        } else {
          fetchobj(data.onthespotevents.ballon_cup_challenge, 0);
        }
      } else {
        fetchobj(data.onthespotevents.ballon_cup_challenge, 0);
      }

      // document.getElementById("allcore").innerText =
        "Mr. Kunal gourav [Ph.no.81209 51155]";
    }
    if (id == "office_tennis") {
      if (document.body.clientWidth < 1300) {
        if (document.body.clientWidth < 665) {
          fetchobj(data.adventuious.office_tennis, 0);
        } else {
          fetchobj(data.adventuious.office_tennis, 0);
        }
      } else {
        fetchobj(data.adventuious.office_tennis, 0);
      }
    }
    if (id == "plank_challenge") {
      if (document.body.clientWidth < 1300) {
        if (document.body.clientWidth < 665) {
          fetchobj(data.adventuious.plank_challenge, 0);
        } else {
          fetchobj(data.adventuious.plank_challenge, 0);
        }
      } else {
        fetchobj(data.adventuious.plank_challenge, 0);
      }
    }
    if (id == "throw_de_ke_dekho") {
      if (document.body.clientWidth < 1300) {
        if (document.body.clientWidth < 665) {
          fetchobj(data.adventuious.throw_de_ke_dekho, 0);
        } else {
          fetchobj(data.adventuious.throw_de_ke_dekho, 0);
        }
      } else {
        fetchobj(data.adventuious.throw_de_ke_dekho, 0);
      }
    }
  });
}

let move = () => {
  document.getElementById("dynamicfetch").style.top = "-30000px";
  document.getElementById("guideline").innerHTML = " ";
  document.getElementById("ham_id").style.backgroundColor = "rgb(0 0 0 / 0%)";
  document.getElementById("ham_id").style.zIndex = "-11";
};
document.getElementById("cross").addEventListener("click", move);
document.getElementById("close").addEventListener("click", move);