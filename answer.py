import result
import datetime

def init_answer(self, question, answers, init_result, status, human_status_makeup):
    init_result = get_result(init_result, )
    answer = {
        "question": question,
        "answers": answers,
        "result": [init_result],
        "status": status,
        "human_status_makeup": human_status_makeup,
        "start_time": datetime.datetime.now()
    }
    return answer

def get_result(answer):
    pri = 0
    if (answer.human_status_makeup == 'yes_yes'):
        pri = 1
    if (answer.human_status_makeup == 'weak_confirm'):
        pri = 0.8
