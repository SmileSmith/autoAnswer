from src.services import answerService
from src.spiders import sogouSpider, ucSpider
import time

MAX_ROUND = 12

def loop_sogou():
    now_round = 0
    while now_round < 12:
        result = sogouSpider.start_sogou()
        print(result)
        result_round = int(result['question']['round'])
        if now_round != result_round:
            answerService.answer_by_ai(result, 'sogou')
        now_round = result_round
    


def loop_uc():
    now_round = 0
    while now_round < 12:
        result = ucSpider.start_uc()
        print(result)
        result_round = int(result['question']['round'])
        if now_round != result_round:
            answerService.answer_by_ai(result, 'uc')
        now_round = result_round
