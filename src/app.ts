import {ref} from "vue";
import {delay, filter, interval, map, observable, Observable, of, take, takeUntil, zip} from "rxjs";

let markdownStr = "# 标题\n\n## 子标题\n\n这是一段普通的文本。可以包含**加粗**、_斜体_、~~删除线~~等样式。\n\n### 列表\n\n- 项目1\n- 项目2\n- 项目3\n\n### 代码块\n\n```python\n\ndef greet():\n    print(\"Hello, world!\")\n\ngreet()\n\n```"

const useStrTemp = `${markdownStr}\n\n${markdownStr}`

const useStr = useStrTemp.split('')


const str = ref<string>('')

export function getStream() {

    const useStream$ = zip(
        of(...useStr),
        interval(100)
    ).pipe(
        take(useStr.length),
        map(([str, num]) => str),
    )

    useStream$.subscribe((v) => {
        str.value += v
    })

    return {
        str,
        useStrTemp
    }
}

