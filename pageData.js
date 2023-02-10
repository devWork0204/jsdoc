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
    }
}