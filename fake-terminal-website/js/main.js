//"use strict";

var main = (function () {
    /**
     * CONFIGS
     */
    var configs = (function () {
        var instance;
        var Singleton = function (options) {
            var options = options || Singleton.defaultOptions;
            for (var key in Singleton.defaultOptions) {
                this[key] = options[key] || Singleton.defaultOptions[key];
            }
        };
        Singleton.defaultOptions = {
            general_help: "Below there's a list of commands that you can use.\nYou can use autofill by pressing the TAB key, autocompleting if there's only 1 possibility, or showing you a list of possibilities.",
            ls_help: "List information about the files and folders (the current directory by default).",
            cat_help: "Read FILE(s) content and print it to the standard output (screen).",
            whoami_help: "Print the user name associated with the current effective user ID and more info.",
            date_help: "Print the system date and time.",
            help_help: "Print this menu.",
            clear_help: "Clear the terminal screen.",
            reboot_help: "Reboot the system.",
            cd_help: "Change the current working directory.",
            mv_help: "Move (rename) files.",
            rm_help: "Remove files or directories.",
            rmdir_help: "Remove directory, this command will only work if the folders are empty.",
            touch_help: "Change file timestamps. If the file doesn't exist, it's created an empty one.",
            sudo_help: "Execute a command as the superuser.",
            welcome: "Welcome to my (Anton Pozarskiy) personal website. I am currently a PhD candidate at Universität Freiburg working in the Systems Control and Optimization Laboratory under the supervision of Prof. Dr. Moritz Diehl and Dr. Armin Nurkanović. The focus of my work is on the optimal control of nonsmooth systems and numerical solutions to nonsmooth optimization problems. I am one of the core developers of the open source tool for accurate optimal control and simulation of nonsmooth systems, nosnoc.",
            internet_explorer_warning: "NOTE: I see you're using internet explorer, this website won't work properly.",
            welcome_file_name: "welcome_message.txt",
            invalid_command_message: "<value>: command not found.",
            reboot_message: "Preparing to reboot...\n\n3...\n\n2...\n\n1...\n\nRebooting...\n\n",
            permission_denied_message: "Unable to '<value>', permission denied.",
            sudo_message: "Unable to sudo using a web client.",
            usage: "Usage",
            file: "file",
            file_not_found: "File '<value>' not found.",
            username: "Username",
            hostname: "Host",
            platform: "Platform",
            accesible_cores: "Accessible cores",
            language: "Language",
            value_token: "<value>",
            host: "pozhar.ski",
            user: "anton",
            is_root: false,
            type_delay: 1
        };
        return {
            getInstance: function (options) {
                instance === void 0 && (instance = new Singleton(options));
                return instance;
            }
        };
    })();
    var files = (function () {
        var instance;
        var Singleton = function (options) {
            var options = options || Singleton.defaultOptions;
            for (var key in Singleton.defaultOptions) {
                this[key] = options[key] || Singleton.defaultOptions[key];
            }
        };
        Singleton.defaultOptions = {
            "email.txt": "",
	    "cv.txt": ""
        };
        return {
            getInstance: function (options) {
                instance === void 0 && (instance = new Singleton(options));
                return instance;
            }
        };
    })();

    var downloads = (function () {
        var instance;
        var Singleton = function (downloads) {
            var downloads = downloads || Singleton.defaultOptions;
            for (var key in Singleton.defaultOptions) {
                this[key] = downloads[key] || Singleton.defaultOptions[key];
            }
        };
        Singleton.defaultOptions = {
	    "resume.pdf":"../files/resume.pdf"
        };
        return {
            getInstance: function (downloads) {
                instance === void 0 && (instance = new Singleton());
                return instance;
            }
        };
    })();

    var filetable = (function () {
        var instance;
        var Singleton = function (downloads) {
            var downloads = downloads || Singleton.defaultOptions;
            for (var key in Singleton.defaultOptions) {
                this[key] = downloads[key] || Singleton.defaultOptions[key];
            }
        };
        Singleton.defaultOptions = {
	    "README.txt": "text",
	    "email.txt": "text",
	    "mailto": "link",
	    "resume.txt": "text",
	    "resume.pdf": "link",
	    "nosnoc": "link",
	    "nosnoc_py": "link",
	    "vdx": "link",
	    "nosbench": "link",
        };
        return {
            getInstance: function (downloads) {
                instance === void 0 && (instance = new Singleton());
                return instance;
            }
        };
    })();
    
    var filetree = (function () {
        var instance;
        var Singleton = function (downloads) {
            var downloads = downloads || Singleton.defaultOptions;
            for (var key in Singleton.defaultOptions) {
                this[key] = downloads[key] || Singleton.defaultOptions[key];
            }
        };
        Singleton.defaultOptions = {
	    "":
	    {
		"home":
		{"anton":
		 {
		     "README.txt":{"content":"ls, cd, and cat work as expected", "type":"text"},
		     "email.txt":{"content":"anton.pozharskiy@imtek.uni-freiburg.de", "type":"text"},
		     "mailto":{"content":"mailto:apozharski@gmail.com", "type":"link"},
		     "cv.txt":{"content": `Anton Edvinovich Pozharskiy
Contact:
- Email: anton.pozharskiy@imtek.uni-freiburg.de
Current Affiliation: PhD student at SYSCOP, IMTEK, Albert-Ludwigs-Universität Freiburg

Education:
- Master of Science, Embedded Systems Engineering, Albert-Ludwigs-Universität Freiburg (October 2021-November 2023)
  - Master Thesis: Evaluating Methods for Solving Mathematical Programs With Complementarity Constraints Arising From Nonsmooth Optimal Control
  - Thesis Grade: 1.1 (German Scale)
- Bachelor of Science, Computer Science, University of Maryland (October 2016-May 2021)
- Bachelor of Science, Electrical Engineering, University of Maryland (October 2016-May 2021)

Publications:
- A. Pozharskiy, A. Nurkanović, and M. Diehl, "Finite Elements with Switch Detection for Numerical Optimal Control of Projected Dynamical Systems," (Accepted: 2024 63rd IEEE Conference on Decision and Control (CDC), Milan, Italy, 2024)
- A. Nurkanović, J. Frey, A. Pozharskiy, and M. Diehl, "FESD-J: Finite Elements with Switch Detection for numerical optimal control of rigid bodies with impacts and Coulomb friction," Nonlinear Analysis: Hybrid Systems, Volume 52, 2024.
- A. Nurkanović*, A. Pozharskiy*, and M. Diehl. "Solving mathematical programs with complementarity constraints arising in nonsmooth optimal control," (Accepted, Vietnam Journal of Mathematics, 2024)
- A. Nurkanović, A. Pozharskiy, J. Frey, and M. Diehl, "Finite Elements with Switch Detection for Numerical Optimal Control of Nonsmooth Dynamical Systems with Set-Valued Step Functions," (Submitted: Nonlinear Analysis: Hybrid Systems)
- A. Nurkanović, J. Frey, A. Pozharskiy, and M. Diehl, "Finite Elements with Switch Detection for Direct Optimal Control of Nonsmooth Systems with Set-Valued Step Functions," 2023 62nd IEEE Conference on Decision and Control (CDC), Singapore, Singapore, 2023
- W. Van Roy et al. (including A. Pozharskiy), "Continuous Optimization for Control of Finite-State Machines with Cascaded Hysteresis via Time-Freezing," 2023 62nd IEEE Conference on Decision and Control (CDC), Singapore, Singapore, 2023

*Equal Contribution
`, "type":"text"},
		     "resume.pdf":{"content":"files/resume.pdf", "type":"file"},
		     "projects":
		     {
			 "nosnoc":{"content":"https://github.com/nurkanovic/nosnoc","type":"link"},
			 "nosnoc_py":{"content":"https://github.com/FreyJo/nosnoc_py", "type":"link"},
			 "vdx":{"content":"https://github.com/apozharski/vdx", "type":"link"},
			 "nosbench":{"content":"https://github.com/apozharski/nosbench", "type":"link"}
		     }
		 }
		},
	    }
        };
        return {
            getInstance: function (downloads) {
                instance === void 0 && (instance = new Singleton());
                return instance;
            }
        };
    })();
    
    /**
     * AUX FUNCTIONS
     */

    

    var isUsingIE = window.navigator.userAgent.indexOf("MSIE ") > 0 || !!navigator.userAgent.match(/Trident.*rv\:11\./);

    var ignoreEvent = (function () {
        return function (event) {
            event.preventDefault();
            event.stopPropagation();
        };
    })();

    var scrollToBottom = (function () {
        return function () {
            window.scrollTo(0, document.body.scrollHeight);
        }
    })();

    /**
     * MODEL
     */

    var InvalidArgumentException = function (message) {
        this.message = message;
        // Use V8's native method if available, otherwise fallback
        if ("captureStackTrace" in Error) {
            Error.captureStackTrace(this, InvalidArgumentException);
        } else {
            this.stack = (new Error()).stack;
        }
    };
    // Extends Error
    InvalidArgumentException.prototype = Object.create(Error.prototype);
    InvalidArgumentException.prototype.name = "InvalidArgumentException";
    InvalidArgumentException.prototype.constructor = InvalidArgumentException;

    var cmds = {
        LS: { value: "ls", help: configs.getInstance().ls_help },
        CAT: { value: "cat", help: configs.getInstance().cat_help },
        WHOAMI: { value: "whoami", help: configs.getInstance().whoami_help },
        DATE: { value: "date", help: configs.getInstance().date_help },
        HELP: { value: "help", help: configs.getInstance().help_help },
        CLEAR: { value: "clear", help: configs.getInstance().clear_help },
        REBOOT: { value: "reboot", help: configs.getInstance().reboot_help },
        CD: { value: "cd", help: configs.getInstance().cd_help },
        MV: { value: "mv", help: configs.getInstance().mv_help },
        RM: { value: "rm", help: configs.getInstance().rm_help },
        RMDIR: { value: "rmdir", help: configs.getInstance().rmdir_help },
        TOUCH: { value: "touch", help: configs.getInstance().touch_help },
        SUDO: { value: "sudo", help: configs.getInstance().sudo_help }
    };

    var cmd_hist = {
	index: 0,
	hist: [""]
    }

    function arrayEqual(a, b) {
	if (a === b) return true;
	if (a == null || b == null) return false;
	if (a.length != b.length) return false;
	
	for (var i = 0; i < a.length; ++i) {
	    if (a[i] !== b[i]) return false;
	}
	return true;
    }
    
    var makePrompt = function(user, host, cwd, root) {
	console.log(cwd);
	if(arrayEqual(cwd.slice(0,3),["", "home", user])) {
	    var tcwd = ["~"];
	    if(cwd.length > 3)
		tcwd.push(cwd.slice(3,cwd.length));
	    cwd = tcwd.join("/");
	}
	else {
	    cwd = cwd.join("/");
	}
	   
	(typeof user === "string" && typeof host === "string") && (output = user + "@" + host + ":"+ cwd + (root ? "#" : "$"));
	return output
    }

    const isObj = function(obj) {
	return (typeof obj == "object" && obj != null) 
    }
    
    const get = (p, o) =>
	  p.reduce((xs, x) => (xs && xs[x]) ? xs[x] : null, o)

    var getLs = function(cwd) {
	
	var ftree = filetree.getInstance();
	var files = get(cwd, ftree);
	return files
    }
    
    var Terminal = function (prompt, cmdLine, output, sidenav, profilePic, user, host, root, outputTimer) {
        if (!(prompt instanceof Node) || prompt.nodeName.toUpperCase() !== "DIV") {
            throw new InvalidArgumentException("Invalid value " + prompt + " for argument 'prompt'.");
        }
        if (!(cmdLine instanceof Node) || cmdLine.nodeName.toUpperCase() !== "INPUT") {
            throw new InvalidArgumentException("Invalid value " + cmdLine + " for argument 'cmdLine'.");
        }
        if (!(output instanceof Node) || output.nodeName.toUpperCase() !== "DIV") {
            throw new InvalidArgumentException("Invalid value " + output + " for argument 'output'.");
        }
        if (!(sidenav instanceof Node) || sidenav.nodeName.toUpperCase() !== "DIV") {
            throw new InvalidArgumentException("Invalid value " + sidenav + " for argument 'sidenav'.");
        }
        if (!(profilePic instanceof Node) || profilePic.nodeName.toUpperCase() !== "IMG") {
            throw new InvalidArgumentException("Invalid value " + profilePic + " for argument 'profilePic'.");
        }
	this.cwd = ["", "home", "anton"];
	this.completePrompt = makePrompt(user, host, this.cwd, root);
        this.profilePic = profilePic;
        this.prompt = prompt;
        this.cmdLine = cmdLine;
        this.output = output;
        this.sidenav = sidenav;
        this.sidenavOpen = false;
        this.sidenavElements = [];
        this.typeSimulator = new TypeSimulator(outputTimer, output);
    };

    Terminal.prototype.type = function (text, callback) {
        this.typeSimulator.type(text, callback);
    };

    Terminal.prototype.exec = function () {
        var command = this.cmdLine.value;
        this.cmdLine.value = "";
        this.prompt.textContent = "";
        this.output.innerHTML += "<span class=\"prompt-color\">" + this.completePrompt + "</span> " + command + "<br/>";
    };

    Terminal.prototype.init = function () {
        this.sidenav.addEventListener("click", ignoreEvent);
        this.cmdLine.disabled = true;
        this.sidenavElements.forEach(function (elem) {
            elem.disabled = true;
        });
        this.prepareSideNav();
        this.lock(); // Need to lock here since the sidenav elements were just added
        document.body.addEventListener("click", function (event) {
            if (this.sidenavOpen) {
                this.handleSidenav(event);
            }
            this.focus();
        }.bind(this));
        this.cmdLine.addEventListener("keydown", function (event) {
            if (event.which === 13 || event.keyCode === 13) {
                this.handleCmd();
                ignoreEvent(event);
            } else if (event.which === 9 || event.keyCode === 9) {
                this.handleFill();
                ignoreEvent(event);
            } else if (event.which === 38 || event.keyCode === 38) {
		this.handleHistUp();
		ignoreEvent(event);
	    } else if (event.which === 40 || event.keyCode === 40) {
		this.handleHistDwn();
		ignoreEvent(event);
	    }
        }.bind(this));
        this.reset();
    };


    Terminal.makeElementDisappear = function (element) {
        element.style.opacity = 0;
        element.style.transform = "translateX(-300px)";
    };

    Terminal.makeElementAppear = function (element) {
        element.style.opacity = 1;
        element.style.transform = "translateX(0)";
    };

    Terminal.prototype.prepareSideNav = function () {
        var capFirst = (function () {
            return function (string) {
                return string.charAt(0).toUpperCase() + string.slice(1);
            }
        })();
        for (var file in files.getInstance()) {
            var element = document.createElement("button");
            Terminal.makeElementDisappear(element);
            element.onclick = function (file, event) {
                this.handleSidenav(event);
                this.cmdLine.value = "cat " + file + " ";
                this.handleCmd();
            }.bind(this, file);
            element.appendChild(document.createTextNode(capFirst(file.replace(/\.[^/.]+$/, "").replace(/_/g, " "))));
            this.sidenav.appendChild(element);
            this.sidenavElements.push(element);
	}
	// Shouldn't use document.getElementById but Terminal is already using loads of params
	document.getElementById("sidenavBtn").addEventListener("click", this.handleSidenav.bind(this));
    };

    Terminal.prototype.handleSidenav = function (event) {
	if (this.sidenavOpen) {
	    this.profilePic.style.opacity = 0;
	    this.sidenavElements.forEach(Terminal.makeElementDisappear);
	    this.sidenav.style.width = "50px";
	    document.getElementById("sidenavBtn").innerHTML = "&#9776;";
	    this.sidenavOpen = false;
	} else {
	    this.sidenav.style.width = "300px";
	    this.sidenavElements.forEach(Terminal.makeElementAppear);
	    document.getElementById("sidenavBtn").innerHTML = "&times;";
	    this.profilePic.style.opacity = 1;
	    this.sidenavOpen = true;
	}
	document.getElementById("sidenavBtn").blur();
	ignoreEvent(event);
    };

    Terminal.prototype.lock = function () {
	this.exec();
	this.cmdLine.blur();
	this.cmdLine.disabled = true;
	this.sidenavElements.forEach(function (elem) {
	    elem.disabled = true;
	});
    };

    Terminal.prototype.unlock = function () {
	this.cmdLine.disabled = false;
	this.prompt.textContent = this.completePrompt;
	this.sidenavElements.forEach(function (elem) {
	    elem.disabled = false;
	});
	scrollToBottom();
	this.focus();
    };
    
    Terminal.prototype.handleHistUp = function () {
	cmd_hist.index = (cmd_hist.hist.length <= cmd_hist.index + 1) ?
	    cmd_hist.hist.length - 1 : cmd_hist.index + 1;
	this.cmdLine.value = cmd_hist.hist[cmd_hist.index];
    };

    Terminal.prototype.handleHistDwn = function () {
	cmd_hist.index = (0 > cmd_hist.index - 1) ?
	    0 : cmd_hist.index - 1;
	this.cmdLine.value = cmd_hist.hist[cmd_hist.index];
    };

    Terminal.prototype.handleFill = function () {
	var cmdComponents = this.cmdLine.value.trim().split(" ");
	if ((cmdComponents.length <= 1) || (cmdComponents.length === 2 && cmdComponents[0] === cmds.CAT.value)) {
	    this.lock();
	    var possibilities = [];
	    if (cmdComponents[0].toLowerCase() === cmds.CAT.value) {
		if (cmdComponents.length === 1) {
		    cmdComponents[1] = "";
		}
		if (configs.getInstance().welcome_file_name.startsWith(cmdComponents[1].toLowerCase())) {
		    possibilities.push(cmds.CAT.value + " " + configs.getInstance().welcome_file_name);
		}
		for (var file in files.getInstance()) {
		    if (file.startsWith(cmdComponents[1].toLowerCase())) {
			possibilities.push(cmds.CAT.value + " " + file);
		    }
		}
		for (var file in downloads.getInstance()) {
		    if (file.startsWith(cmdComponents[1].toLowerCase())) {
			possibilities.push(cmds.CAT.value + " " + file);
		    }
		}
	    } else {
		for (var command in cmds) {
		    if (cmds[command].value.startsWith(cmdComponents[0].toLowerCase())) {
			possibilities.push(cmds[command].value);
		    }
		}
	    }
	    if (possibilities.length === 1) {
		this.cmdLine.value = possibilities[0] + " ";
		this.unlock();
	    } else if (possibilities.length > 1) {
		this.type(possibilities.join("\n"), function () {
		    this.cmdLine.value = cmdComponents.join(" ");
		    this.unlock();
		}.bind(this));
	    } else {
		this.cmdLine.value = cmdComponents.join(" ");
		this.unlock();
	    }
	}
    };

    Terminal.prototype.handleCmd = function () {
	cmd_hist.hist.splice(1,0,this.cmdLine.value.trim());
	cmd_hist.index = 0;
	var cmdComponents = this.cmdLine.value.trim().split(" ");
	this.lock();
	switch (cmdComponents[0]) {
	case cmds.CAT.value:
            this.cat(cmdComponents);
            break;
	case cmds.LS.value:
            this.ls();
            break;
	case cmds.WHOAMI.value:
            this.whoami();
            break;
	case cmds.DATE.value:
            this.date();
            break;
	case cmds.HELP.value:
            this.help();
            break;
	case cmds.CLEAR.value:
            this.clear();
            break;
	case cmds.REBOOT.value:
            this.reboot();
            break;
	case cmds.CD.value:
	    this.cd(cmdComponents);
	    break;
	case cmds.MV.value:
	case cmds.RMDIR.value:
	case cmds.RM.value:
	case cmds.TOUCH.value:
            this.permissionDenied(cmdComponents);
            break;
	case cmds.SUDO.value:
            this.sudo();
            break;
	default:
            this.invalidCommand(cmdComponents);
            break;
	};
    };

    // TODO: Make cat respect cwd
    Terminal.prototype.cat = function (cmdComponents) {
	var result;
	if (cmdComponents.length <= 1) {
	    result = configs.getInstance().usage + ": " +
		cmds.CAT.value + " <" +
		configs.getInstance().file + ">";
	} else if (!cmdComponents[1]) {
	    result = configs.getInstance().file_not_found.replace(configs.getInstance().value_token, cmdComponents[1]);
	}
	else
	{
	    obj = getLs(this.cwd.concat([cmdComponents[1]]));
	    if(!(obj === undefined || obj === null) && obj.hasOwnProperty("type"))
	    {
		if(obj.type == "text" || obj.type == "link")
		{
		    result = obj.content;
		}
		else if (obj.type == "file")
		{
		    result = obj.content;
		    window.open(obj.content);
		}
		else
		{
		    result = configs.getInstance().file_not_found.replace(configs.getInstance().value_token, cmdComponents[1]);
		}
	    }
	    else
	    {
		result = configs.getInstance().file_not_found.replace(configs.getInstance().value_token, cmdComponents[1]);
	    }
	}
	
	this.type(result, this.unlock.bind(this));
    };

    Terminal.prototype.cd = function(cmdComponents) {
	if (cmdComponents.length <= 1) {
	    // TODO: Add usage 
	}
	else
	{
	    var result = "";
	    var config = configs.getInstance();
	    var user = config.user; var host = config.host; var is_root = config.is_root;
	    if (cmdComponents[1] == "..") {
		this.cwd.pop();
	    }
	    else if (cmdComponents[1] == ".") {
		
	    }
	    else {
		var files = getLs(this.cwd);
		var file = files[cmdComponents[1]];
		if (isObj(file)) {
		    this.cwd.push(cmdComponents[1]);
		}
		else {
		    result = "cd: " + cmdComponents[1] + (file == null ? ": No such file or directory" : ": Not a directory");
		}
	    }
	    this.completePrompt = makePrompt(user, host, this.cwd, is_root);
	}
	if (result != "")
	    this.type(result, this.unlock.bind(this));
	else
	    this.unlock();
    }
    
    Terminal.prototype.ls = function () {
	var result = ".\n..\n";
	var files = getLs(this.cwd);
	for (var file of Object.keys(files)) {
	    result += file.toString() + ((!files[file].hasOwnProperty("type")) ? "/" : "") + "\n";
	}
	this.type(result.trim(), this.unlock.bind(this));
    };

    Terminal.prototype.sudo = function () {
	this.type(configs.getInstance().sudo_message, this.unlock.bind(this));
    }

    

    Terminal.prototype.whoami = function (cmdComponents) {
	var result = configs.getInstance().username + ": " +
	    configs.getInstance().user + "\n" +
	    configs.getInstance().hostname + ": " +
	    configs.getInstance().host + "\n" +
	    configs.getInstance().platform + ": " +
	    navigator.platform + "\n" +
	    configs.getInstance().accesible_cores + ": " +
	    navigator.hardwareConcurrency + "\n" +
	    configs.getInstance().language + ": " +
	    navigator.language;
	this.type(result, this.unlock.bind(this));
    };

    Terminal.prototype.date = function (cmdComponents) {
	this.type(new Date().toString(), this.unlock.bind(this));
    };

    Terminal.prototype.help = function () {
	var result = configs.getInstance().general_help + "\n\n";
	for (var cmd in cmds) {
	    result += cmds[cmd].value + " - " + cmds[cmd].help + "\n";
	}
	this.type(result.trim(), this.unlock.bind(this));
    };

    Terminal.prototype.clear = function () {
	this.output.textContent = "";
	this.prompt.textContent = "";
	this.prompt.textContent = this.completePrompt;
	this.unlock();
    };

    Terminal.prototype.reboot = function () {
	this.type(configs.getInstance().reboot_message, this.reset.bind(this));
    };

    Terminal.prototype.reset = function () {
	this.output.textContent = "";
	this.prompt.textContent = "";
	if (this.typeSimulator) {
	    this.type(configs.getInstance().welcome + (isUsingIE ? "\n" + configs.getInstance().internet_explorer_warning : ""), function () {
		this.unlock();
	    }.bind(this));
	}
    };
    

    Terminal.prototype.permissionDenied = function (cmdComponents) {
	this.type(configs.getInstance().permission_denied_message.replace(configs.getInstance().value_token, cmdComponents[0]), this.unlock.bind(this));
    };

    Terminal.prototype.invalidCommand = function (cmdComponents) {
	this.type(configs.getInstance().invalid_command_message.replace(configs.getInstance().value_token, cmdComponents[0]), this.unlock.bind(this));
    };

    Terminal.prototype.focus = function () {
	this.cmdLine.focus();
    };

    var TypeSimulator = function (timer, output) {
	var timer = parseInt(timer);
	if (timer === Number.NaN || timer < 0) {
	    throw new InvalidArgumentException("Invalid value " + timer + " for argument 'timer'.");
	}
	if (!(output instanceof Node)) {
	    throw new InvalidArgumentException("Invalid value " + output + " for argument 'output'.");
	}
	this.timer = timer;
	this.output = output;
    };

    TypeSimulator.prototype.type = function (text, callback) {
	var isURL = (function () {
	    return function (str) {
		return (str.startsWith("http") || str.startsWith("www")) && str.indexOf(" ") === -1 && str.indexOf("\n") === -1;
	    };
	})();
	if (isURL(text)) {
	    window.open(text);
	}
	var i = 0;
	var output = this.output;
	var timer = this.timer;
	var skipped = false;
	var skip = function () {
	    skipped = true;
	}.bind(this);
	document.addEventListener("dblclick", skip);
	(function typer() {
	    if (i < text.length) {
		var char = text.charAt(i);
		var isNewLine = char === "\n";
		output.innerHTML += isNewLine ? "<br/>" : char;
		i++;
		if (!skipped) {
		    setTimeout(typer, isNewLine ? timer * 2 : timer);
		} else {
		    output.innerHTML += (text.substring(i).replace(new RegExp("\n", 'g'), "<br/>")) + "<br/>";
		    document.removeEventListener("dblclick", skip);
		    callback();
		}
	    } else if (callback) {
		output.innerHTML += "<br/>";
		document.removeEventListener("dblclick", skip);
		callback();
	    }
	    scrollToBottom();
	})();
    };

    return {
	listener: function () {
	    new Terminal(
		document.getElementById("prompt"),
		document.getElementById("cmdline"),
		document.getElementById("output"),
		document.getElementById("sidenav"),
		document.getElementById("profilePic"),
		configs.getInstance().user,
		configs.getInstance().host,
		configs.getInstance().is_root,
		configs.getInstance().type_delay
	    ).init();
	}
    };
})();

window.onload = main.listener;
