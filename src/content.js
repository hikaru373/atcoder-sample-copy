(() => {
    "use strict";

    const BUTTON_ID = "atcoder-sample-copy-button";

    // ボタンの複製防止
    if (document.getElementById(BUTTON_ID)) {
        return;
    }

    async function copySamples(button) {
        const samples = [];

        const lang = document.documentElement.lang;
        // 入力例と出力例を直接取得
        const selector = lang === "en"
            ? "#task-statement .lang-en pre[id^='pre-sample']"
            : "#task-statement .lang-ja pre[id^='pre-sample']";
        const inputSamples = document.querySelectorAll(selector);


        if (inputSamples.length === 0) {
            alert('サンプルがありません');
            return;
        }
        // pre-sample0, pre-sample1, ... の順番で取得
        inputSamples.forEach((pre) => {
            samples.push(pre.textContent.trim());
        });
        const text = samples.join('\n\n');
        try {
            await navigator.clipboard.writeText(text);
            button.textContent = "✓ コピーしました";
            setTimeout(() => {
                button.textContent = "📋 サンプルを全部コピー";
            }, 1500);
        } catch (error) {
            console.error("コピー失敗:", error);
            alert("コピーに失敗しました。");
        }

    }

    function createButton() {
        const statement = document.querySelector("#task-statement");

        if (!statement) {
            console.error("#task-statement が見つかりません");
            return;
        }

        const button = document.createElement("button");

        button.id = BUTTON_ID;
        button.type = "button";
        button.className = "btn btn-primary"; // AtCoderのボタンと同じclass
        button.textContent = "📋 サンプルを全部コピー";
        button.style.marginBottom = "15px";

        button.addEventListener('click', async () => {
            copySamples(button)
        });

                statement.prepend(button);
            }

            createButton();
})();