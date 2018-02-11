from src.services import answerService
from src.spiders import sogouSpider, ucSpider

def loop_sogou():
    result = sogouSpider.start_sogou()
    answerService.answer_by_ai(result, 'sogou')
    print(result)


def loop_uc():
    result = ucSpider.start_uc()
    answerService.answer_by_ai(result, 'uc')
    print(result)

