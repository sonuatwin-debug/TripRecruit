import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqItems = [
  {
    question: "招聘流程是怎样的？",
    answer: "提交简历 → 我们会对候选人的简历进行初步筛选。\n通过面试 → 通过筛选后，将安排面试，考察综合能力与岗位匹配度。\n接收并确认 Offer → 面试通过后，我们会发放录用通知，候选人确认后进入下一阶段。\n对接体检事宜 → 我们会协助安排体检流程，确保无任何疾病与海外工作个人安全。\n体检通过即可出发到所属地区 → 一旦体检合格，我们会立即为候选人安排前往对应的工作地区，开始新的职业旅程。"
  },
  {
    question: "投递简历后多久会有反馈？",
    answer: "我们会在收到您的简历后尽快进行筛选。如果您通过了初步筛选，我们的招聘专员通常会在1-2天内与您联系。由于投递量较大，未通过筛选的候选人我们可能无法一一回复，敬请谅-解。"
  },
  {
    question: "是否支持远程办公？",
    answer: "我们提供灵活的办公模式。部分技术和设计岗位支持混合办公或远程办公，具体情况取决于您申请的职位和团队要求，您可以在面试时与招聘官详细沟通。"
  },
    {
    question: "我的简历是否会保存在人才库？",
    answer: "是的，所有投递的简历都会被安全地保存在我们的人才库中。即使暂时没有合适的职位，一旦未来有新的机会，我们也会优先考虑人才库中的候选人。"
  }
];

export default function FaqPage() {
  return (
    <div className="container">
      <div className="py-12 md:py-20">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold font-headline">常见问题</h1>
            <p className="text-lg text-muted-foreground mt-2">在这里找到您问题的答案。</p>
          </div>
          
          <Accordion type="single" collapsible className="w-full">
            {faqItems.map((item, index) => (
              <AccordionItem key={item.question} value={`item-${index}`}>
                <AccordionTrigger className="text-lg font-semibold">{item.question}</AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base whitespace-pre-line">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </div>
  )
}
