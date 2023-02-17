var pageData = {
    about: {
        title: "Giới thiệu",
        concept: {
            title: "JavaScript là gì",
            state1: "<b>JavaScript</b> (thường hay viết tắt là JS) là ngôn ngữ lập trình kịch bản (scripting language) cho client-side, sau này còn cho cả server-side (Nodejs).",
            state2: "Được sử dụng chủ yếu để nâng cao sự tương tác của người dùng với trang web. Nói cách khác, bạn có thể làm cho trang web trở nên sinh động và tăng tính tương tác hơn. Trong các ứng dụng web, người ta hay dùng JS để làm các hiệu ứng đặc biệt như sliders, pop-ups, hoặc xác thực dữ liệu các form (form validations) trước khi gửi dữ liệu lên server .v.v...",
        },
        operate: {
            title: "Hoạt động như thế nào",
            state1: "<b>JavaScript</b> được nhúng trực tiếp vào một website hoặc được tham chiếu qua file <b>.js</b> hoặc <b>.JavaScript</b>.",
            state2: "Các script sẽ được download về máy client khi truy cập website.",
            state3: "Tại đây, chúng sẽ được hệ thống xử lý ngay tại client."
        },
        purpose: {
            title: "Dùng để làm gì",
            state1: "Thay đổi nội dung HTML",
            state2: "Thay đổi style/kiểu HTML",
            state3: "Ẩn/Hiển các phần tử HTML"
        },
        devTool: {
            title: "Giới thiệu DevTool",
            state1: "<b>Dev Tools</b> (developer tools) là công cụ được tích hợp sẵn trong trình duyệt, giúp các lập trình viên có thể dễ dàng truy cập vào nội bộ của trình duyệt và ứng dụng trang web của họ.",
            state2: "Với đa phần các trình duyệt, bạn có thể nhấn <b>F12</b> hoặc tổ hợp phím <b>Ctrl Shift I</b> trên Windows (<b>Ctrl Opt J</b> trên macOS) để mở Chrome Dev Tools.",
            state3: {
                title: "Tại giao diện Dev Tool:",
                state1: "Dòng màu đỏ: thông báo lỗi.",
                state2: "Bên phải và/hoặc ở dưới: hiển thị vị trí lỗi. Bạn có thể nhấn vào đó. Dev Tools sẽ hiển thị lỗi trong mã nguồn.",
                state3: "Bên dưới dòng lỗi màu đỏ là kí tự <b>></b> màu xanh. Là nơi bạn có thể gõ lệnh"
            }
        }
    },
    basic: {
        title: "Javascript cơ bản",
        init: {
            title: "Hướng dẫn khởi tạo",
        },
        texture: {
            title: "Cấu trúc code trong Javascript",
            example1: 'console.log("Hello");\nconsole.log("World");\nconsole.log("This is a")\nconsole.log("JavaScript toturial")',
            example2: 'Hello\nWorld\nThis is a\nJavaScript toturial',
            example3: 'console.log(1 +\n1 +\n1);'
        },
        comment: {
            title: "Comment trong JavaScript"
        },
        decalare: {
            title: "Khai báo biến"
        },
        varRuleName: {
            title: "Quy tắc đặt tên biến"
        },
        dataType: {
            title: "Các kiểu dữ liệu"
        },
        operator: {
            title: "Toán tử",
            foreword: "Trong toán học, bạn đã biết về các toán tử cơ bản như: cộng <b>+</b>, trừ <b>-</b>, nhân <b>*</b> và chia <b>/</b>...",
            concept: "Vậy toán tử trong JavaScript là một công cụ để thao tác với dữ liệu. Khi đó, đối tượng mà toán tử thao tác đến gọi là toán hạng.",
            numbOperator: {
                title: "Toán tử số học",
                concept: "Toán tử số học là toán tử dùng để thực hiện các phép toán số học",
                list: {
                    item1: "Toán tử cộng <b>+</b>",
                    item2: "Toán tử trừ <b>-</b>",
                    item3: "Toán tử nhân <b>*</b>",
                    item4: "Toán tử chia <b>/</b>",
                    item5: "Toán tử chia lấy dư <b>%</b>",
                    item6: "Toán tử lũy thừa <b>**</b>"
                },
                example1: "console.log(5 + 2); // 7\nconsole.log(5 - 2); // 3\nconsole.log(5 * 2); // 10\nconsole.log(5 / 2); // 2.5\nconsole.log(5 % 2); // 1 (số dư)\nconsole.log(5 ** 2); // 25 (5 lũy thừa 2)"
            },
            concatOprator: {
                title: "Toán tử ghép string <b>+</b>",
                concept: "Khi một trong hai toán hạng của toán tử <b>+</b> có kiểu dữ liệu là string thì toán hạng còn lại sẽ bị chuyển thành kiểu string.",
                example1: 'console.log("hello" + " javascript"); // hello javascript\nconsole.log(1 + "2"); // 12\nconsole.log("1" + true); // 1true'
            },
            convertOperator: {
                title: "Toán tử chuyển đổi kiểu dữ liệu thành number +",
                concept: "Trong các phần trên, toán tử <b>+</b> đang đóng vai trò là toán tử hai ngôi. Nhưng khi <b>+</b> là toán tử một ngôi thì toán tử <b>+</b> sẽ thực hiện việc chuyển đổi kiểu dữ liệu của toán hạng thành number.",
                example1: '// Không ảnh hưởng đến số\nconsole.log(+1); // 1\n\n// Chuyển đổi các kiểu dữ liệu khác thành số\nconsole.log(+true); // 1\nconsole.log(+false); // 0\nconsole.log(+"abc"); // NaN\nconsole.log(+""); // 0\nconsole.log(+undefined); // NaN\nconsole.log(+null); // 0\nconsole.log(+{ x: 1 }); // NaN'
            },
            assignOperator: {
                title: "Toán tử gán",
                concept1: "Toán tử gán dùng để gán giá trị cho một biến (hoặc hằng)",
                example1: 'let x = 1; // gán giá trị cho biến\nconst message = "Hello"; // gán giá trị cho hằng',
                concept2: "có thể thay đổi giá của một biến và gán lại cho chính nó",
                example2: "// Gán bình thường\nlet n = 1;\nn = n + 5;\n// Hoặc sử dụng có pháp rút gọn\nlet n = 1;\nn = n + 5"
            },
            step1Operator: {
                title: "Toán tử tăng 1 đơn vị <b>++</b> và giảm 1 đơn vị <b>--</b>",
                concept1: "Toán tử <b>++</b> làm tăng giá trị 1 đơn vị. Toán tử <b>--</b> làm giảm giá trị 1 đơn vị",
                example1: "let n = 1;\nn++; // tương đương với n += 1",
                foreword1: "Toán tử <b>++</b> và <b>--</b> có hai dạng:",
                state1: "Đặt trước biến ++a, --a",
                state2: "Đặt sau biến a++, a--",
                example2: "let a = 2;\nlet x = ++a;\nconsole.log(a); // 3\nconsole.log(x); // 3\n\nlet b = 2;\nlet y = b++;\nconsole.log(b); // 3\nconsole.log(y); // 2"
            },
            bitwiseOperator: {
                title: "Toán tử bitwise",
                concept: "Toán tử bitwise là các toán tử áp dụng trên đối tượng bit (toán tử bitwise thao tác trên số tự nhiên 32 bit)"
            },
            commaOperator: {
                title: "Toán tử dấu phẩy",
                concept1: "Toán tử dấu phẩy cho phép thực hiện một vài biểu thức (cách nhau bằng dấu phẩy), nhưng kết quả thì chỉ lấy ở biểu thức cuối cùng.",
                example1: "let a = 1;\nlet x = ((a = a + 1), a + 4);\nconsole.log(a); // 2\nconsole.log(x); // 6"
            }
        },
        compare: {
            title: "So sánh",
            types: {
                foreword: "Các toán tử so sánh trong JavaScript",
                concept: "Toán tử so sánh là toán tử hai ngôi dùng để so sánh giá trị của hai toán hạng với nhau.",
                operator: "> // Lớn hơn\n< // Nhỏ hơn\n>= // Lớn hơn hoặc bằng\n<= // Bé hơn hoặc bằng\n== // So sánh bằng không nghiêm ngặt\n=== // So sánh bằng nghiêm ngặt\n!= So sánh khác không nghiêm ngặt\n!== So sánh khác nghiêm ngặt"
            },
            result: {
                forword: "Kết quả của phép so sánh",
                concept: "Kết quả của phép so sánh luôn là một giá trị kiểu <b>boolean</b>"
            },
            diffTypes: {
                concept: "Khi so sánh các toán hạng khác kiểu dữ liệu, JavaScript chuyển đổi giá trị các toán hạng ra dạng số",
                state1: "Đối với kiểu dữ liệu boolean, <b>true</b> sẽ chuyển thành <b>1</b> và <b>false</b> chuyển thành <b>0</b>.",
                example1: 'console.log("5" > 4); // true, vì "5" chuyển thành 5\nconsole.log("11" == 1); // false, vì "11" chuyển thành 11\nconsole.log(true == 1); // true\nconsole.log(false == 0); // false',
                strictCompare: {
                    concept: "Đối với toán tử so sánh bằng <b>nghiêm ngặt</b>, JavaScript sẽ không thực hiện chuyển đổi kiểu dữ liệu.",
                    example1: 'console.log("1" == 1); // true\nconsole.log("1" === 1); // false\nconsole.log("" != 0) // false\nconsole.log("" !== 0) // true'
                }
            },
            nullAndUndefined: {
                title: "So sánh với <b>null</b> và <b>undefined</b>",
                concept: "Khác với các kiểu dữ liệu khác, việc so sánh <b>null</b> và <b>undefined</b> thường không rõ ràng cho lắm.",
                example1: "console.log(null === undefined); // false\nconsole.log(null == undefined); // true\n",
                null2Zero: {
                    title: "So sánh <b>null</b> với 0",
                    example1: "console.log(null > 0); // false\nnconsole.log(null >= 0); // true\nconsole.log(null == 0); // false"
                },
                undefined2Zero: {
                    title: "So sánh <b>undefined</b> với 0",
                    example1: "console.log(undefined > 0); // false\nconsole.log(undefined >= 0); // false\nconsole.log(undefined == 0); // false"
                },
                note1: 'Để tránh những tình huống "phi logic" trên, bạn chỉ nên so sánh null hoặc undefined khi sử dụng toán tử so sánh bằng "nghiêm ngặt" (===) hoặc toán tử so sánh khác "nghiêm ngặt" (!==).',
                note2: 'Không nên sử dụng toán tử >, <, >= và <= với null và undefined.',
                note3: 'Trường hợp một biến có thể null hoặc undefined thì bạn nên kiểm tra giá trị có bằng null hoặc undefined hay không để xử lý trước. Khi biến khác null và undefined rồi thì mới thực hiện so sánh với các toán tử >, <, >= và <= sau.'
            }
        },
        function: {
            title: "Hàm",
            concept1: "Hàm trong JavaScript là một chương trình con giúp thực thi một công việc cụ thể. Để định nghĩa hàm trong JavaScript, bạn sử dụng từ khoá <b>function</b> với cú pháp là:",
            example1: "function functionName([parameter1], [parameter2],...) {\n\tstatement1;\n\tstatement2;\n\t...\n}",
            defaulParam: {
                concept1: "Đối với hàm có tham số mà khi gọi hàm, bạn không truyền giá trị vào thì giá trị của tham số đó là <b>undefined</b>, ví dụ:",
                concept2: 'Trong trường hợp này, bạn có thể định nghĩa "giá trị mặc định" cho tham số bằng cách sử dụng toán tử gán <b>=</b> như sau:',
                concept3: 'Giá trị mặc định có thể là một biểu thức hoặc thậm chí là một hàm khác, ví dụ:',
                example1: 'function aFunction() {\n\treturn "my team"\n}\n\nfunction sayHello(message, team = "auto") {\n\treturn message + " to " + team;\n}\n\nsayHello()',
            },
            return: {
                concept1: "Từ khóa <b>return</b> trong JavaScript có thể đặt ở bất kỳ đâu trong thân hàm. Khi gặp từ khóa <b>return</b>, hàm sẽ dừng lại và trả về giá trị sau <b>return</b>.",
                example1: 'function sum(a, b) {\n  if (a === null || a === undefined) {\n    return "Không hợp lệ!";\n  }\n\n  if (b === null || b === undefined) {\n    return;\n  }\n\n  return a + b;\n}\n\nsum(); // Tham số không hợp lệ!',
                concept2: "Có thể thấy rằng, vị trí return thứ 2 không có giá trị nào theo sau. Khi đó, giá trị trả về mặc định là <b>undefined</b>",
                concept3: "Ngoài ra, nếu hàm không có return thì giá trị trả về cũng là <b>undefined</b>",
            }
        },
        loop: {
            title: "Vòng lặp",
            foreword: "Đôi khi bạn cần phải lặp lại một hành động với số lần cho trước. Thay vì phải viết lại code giống nhau cho mỗi lượt lặp, JavaScript cung cấp cho bạn một cấu trúc lặp hay gọi cách khác là vòng lặp trong JavaScript.",
            while:{
                example1: "let count = 1;\n\nwhile (count <= 3) { // codition \n\t// code\n\tconsole.log(count);\n\tcount++;\n}"
            },
            doWhile: {
                concept1: "Vòng lặp do...while tương tự như vòng lặp while, chỉ khác là điều kiện vòng lặp được chuyển xuống cuối cấu trúc lặp.",
                concept2: "do...while luôn thực hiện ít nhất một lượt lặp. Sau đó mới kiểm tra điều kiện lặp.",
                example1: "let count = 1;\n\tdo {\n\tconsole.log(count);\n\tcount++;\n} while (count <= 3);"
            }
        }
    },
    object: {
        title: "Object trong Javascript",
        concept: {
            title: "Object là gì",
            state1: "Về bản chất, object là tập hợp của các key và value. Với key gọi là thuộc tính, còn value là giá trị tương ứng của thuộc tính.",
            state2: "JavaScript object sử dụng cặp dấu ngoặc <b>{}</b> để biểu diễn:",
            example1: 'let myComputer = {\n\ttype: "laptop",\n\tbrand: "Sony",\n\tos: "Windows 7"\n};',
            desc1: "<b>type, laptop brand, os</b> là tên thuộc tính, có kiểu dữ liệu <b>string</b>",
            desc2: "<b>laptop, Sony,...</b>  là giá trị tương ứng của các thuộc tính. <b>Value</b> có thể thuộc bất kỳ kiểu dữ liệu nào (kể cả <b>object</b>).",
            example2: "let myComputer = {};\nlet yourComputer = new Object();",
        },
        use: {
            title: "Tương tác với Object",
            example1: 'let myComputer = {\n\ttype: "laptop",\n\tbrand: "Sony",\t\n\tos: "Windows 7",\n\t"graphic card": "NVIDIA"\n};\n\nmyComputer.type // truy cập thuộc tính type\nmyComputer.brand = "Dell" // cập nhập giá trị brand \nmyComputer.brand // truy cập tính type\n\nmyComputer["graphic card"] // truy cập "graphic card"\nmyComputer["os"] = "Ubuntu" // cập nhập giá trị os\n',
            state1: "Đặc biệt, toán tử <b>.</b> chỉ dùng được trong trường hợp tên thuộc tính không có kí tự đặc biệt (ngoại trừ kí tự <b>_</b> và <b>$</b>)",
            example2: 'let myComputer = {};\n\nmyComputer.type = "pc"',
            example3: 'let myComputer = {\n  type: "laptop"\n};\n\ndelete myComputer.type;\nmyComputer.type'
        },
        squareOperator: {
            title: "Toán tử ngoặc vuông []",
            concept1: "JavaScript cho phép bạn truy cập vào thuộc tính với giá trị của key là biến hoặc biểu thức.",
            example1: 'let myComputer = {\n  "graphic card": "NVIDIA",\n};\n\n// sử dụng biến\nlet key = "graphic card";\nmyComputer[key]\n\n// sử dụng biểu thức\nmyComputer["graphic" + " " + "card"]',
            example2: 'let t = "type";\n\nlet myComputer = {\n  [t]: "laptop",\n  [os]: "NVIDIA",\n};\n\nmyComputer.type;'
        },
        compact: {
            title: "Cú pháp rút gọn",
            state1: "Khi lập trình, bạn sẽ gặp trường hợp là: muốn sử dụng tên biến làm tên thuộc tính cho object",
            state1: "Để tránh phải viết lặp lại, JavaScript cung cấp cú pháp rút gọn như sau:",
            example1: 'let type = "laptop", brand = "Sony", os = "Windows 7";\n\n// khai báo thông thường\nlet myComputer = {\n    type: type,\n    brand: brand,\n    os: os\n  };\n// JSON.stringify(myComputer);\n\n// rút gọn\nlet myComputer = {\n    type,\n    brand,\n    os\n};\nJSON.stringify(myComputer);'
        },
        specObject: {
            title: "Các Object đặc biệt trong JavaScript",
            arg: {
                concept: "Mỗi khi hàm được gọi, có một biến số đặc biệt tên là arguments được thêm vào bên trong phạm vi của function. Biến số này chứa một thuộc tính là length, để xác định số lượng tham số truyền vào.",
                example1: "function maxOf() {\n  let max = -1;\n\n  for (let i = 0; i < arguments.length; i++) {\n    if (arguments[i] > max) max = arguments[i];\n  }\n\n  return max;\n}\n\nmaxOf(1, 2)\n\n// maxOf(1, 2, 6, 4, 7, 3, 5)",
            },
            math: {
                example1: "Math.min(1, 2, 3); // Tìm giá trị nhỏ nhất.\nMath.max(1, 2, 3); // Tìm giá trị lớn nhất.\nMath.sqrt(4); // Tìm giá trị căn bậc hai.\nMath.abs(-5); // Tìm giá trị tuyệt đối."
            },
            global: {
                concept1: "Trên với trình duyệt, object lớn nhất chính là window. Mọi biến <b>global</b> đều thuộc đối tượng này.",
                example1: 'var x = 6;\n\n"x" in window;\n\nwindow.x;'
            }
        },
    },
    common: {
        title: "Các phương thức thường dùng",
        string: {
            title: "Xử lý String",
            example1: "let example1 = '  String toturial 1: String là kiểu dữ liệu thông dụng trong Js   '",
            example2: 'example1.toLowerCase(); // chuyển chữ viết thường\nexample1.toUpperCase(); // chuyển chữ viết hóa',
            example3: 'example1.trimStart() // loại bỏ khoảng trắng ở đầu\nexample1.trimEnd() // loại bỏ khoảng trắng ở cuối\nexample1.trim()',
            example4: 'example1.substring(3, 13) // cắt đoạn string giữa từ vị trí 3 đến 13\nexample1.substr(3, 13) // cắt chuỗi từ vị trí 3 và lấy 13 ký tự',
            example5: '// thay thế kết chuỗi "String" đầu tiên tìm được\nexample1.replace("String", "Chuỗi")\n\n// thay thế tất cả các chuỗi "String"\nexample1.replaceAll("String", "Chuỗi")',
            example6: 'let foo = example1.split(" ", 4)\nJSON.stringify(foo)',
            example7: 'example1.startsWith("String") // chuỗi có bắt đầu từ "String" không?\nexample1.endsWith("Js") // chuỗi có kết thúc bằng "Js" không?\nexample1.includes("String") // chuỗi có chứa "String" không',
            example8: 'example1.concat(" ", "(thử nghiệm)", " ", "phiên bản 1")'
        },
        object: {
            title: "Xử lý Object",
            example1: "const example2 = {\n    firstName: 'Hieu',\n    lastName: 'Bui'\n};",
            example2: "Object.assign(example2, {age: 10}, {firstName: 'Ho'})\nJSON.stringify(example2)",
            example3: "let entries = Object.entries(example2)\nJSON.stringify(entries)",
            example4: "let keys = Object.keys(example2)\nJSON.stringify(keys)\n\nlet values = Object.values(example2)\nJSON.stringify(values)",
            example5: `let foo = JSON.parse('{"shape": "Round"}')\nfoo.shape;\n\nlet foo2 = JSON.stringify(example2)\nfoo2`,
        },
        array: {
            title: "Array",
            example1: 'let example3 = ["toturial", {fee: 100}, 5, 10, 15, 20, "khóa học js cấp tốc"]',
            example2: 'let foo = example3.concat([1, 2], ["a", "b"])\n\nJSON.stringify(foo)',
            example3: 'let foo = example3.filter(function(ele, i) {\n  return typeof(ele) == "string"\n});\n\nJSON.stringify(foo)',
            example4: 'let foo = example3.find(function(ele, i) {\n  return typeof(ele) == "string"\n});\n\nfoo',
            example5: 'example3.forEach(function(ele, i) {\n  alert(ele);\n});',
            example6: 'example3.includes({fee: 100});\n\nexample3.includes(10);',
            example7: 'example3.indexOf("toturial", 1);\n\nexample3.indexOf({fee: 100}, 1);',
            example8: 'example3.join(" -> ");',
            example9: 'let foo = example3.map(function(ele, i){\n  return `value: ${ele} - at: ${i}`;\n});\n\nJSON.stringify(foo)',
            example10: 'example3.pop()',
            example11: 'example3.shift()',
            example12: 'example3.push("othelo", 520)\nJSON.stringify(example3)',
            example13: 'example3.unshift(["number1", 2])\nJSON.stringify(example3)',
            example14: 'example3.filter(function(ele) {\n  return typeof ele == "number";\n})\n.reduce(function(total, current) {\n  return total + current;\n})',
            example15: 'let foo = example3.reverse()\nJSON.stringify(foo)',
            example16: 'example3.some(function(ele) {\n  return typeof ele == "number";\n})',
            example17: 'example3.sort();\n\nexample3.sort(function(a, b){\n  let a1 = String(a), b1 = String(b);\n  return a1.length > b1.length ? -1 : 1;\n});',
            example18: 'let foo = example3.slice(1, 2)\n\nJSON.stringify(foo)',
            example19: 'let foo = example3.splice(2, 1, "happy new year", 2023);\n\nJSON.stringify(foo);\n\nJSON.stringify(example3);',
            example20: 'Array.from([1, 2, 3], function(ele){\n  return ele**2;\n});',
            example21: 'Array.isArray(example3)',
        }
    }
};

var practice = {
    ex1: {
        title: "Bài 1: ",
        state1: "Viết chương trình JavaScript để lấy ngày hiện tại. Đầu ra mong đợi: mm-dd-yyyy",
        tip: "// Gợi ý: Các Lấy ngày hiện tại\nlet now = new Date()\n// lấy năm/ lấy tháng/ lấy ngày\nnow.getFullYear()\nnow.getMonth()\nnow.getDay()\n",
        state2: "",
        code: "",
    },
    ex2: {
        title: "Bài 2: ",
        state1: "Viết chương trình tính tổng các số nguyên dương trong mảng",
        code: "let foo = ['tính tổng', '1', 2, 3, -4, 2.6, 7.4, {num: 123}]",
    }
}