import result
import datetime

class my_answer():
    def init_answer(self, question, answers, init_result, status, human_status_makeup):
        answer = {
            "question": question,
            "answers": answers,
            "results": [init_result],
            "status": status,
            "start_time": datetime.datetime.now()
        }
        return answer

    def add_result_baidu_ai(self, no, makeup):
        pri = 0
        if (makeup == 'yes_yes'):
            pri = 1
        if (makeup == 'weak_confirm'):
            pri = 0.7
        if (makeup == 'contradation'):
            pri = 0.8
        if (makeup == 'no_no'):   
            pri = 0.1 
        return [result.init_result(no, pri)]

    def add_result_sogou(self, no):
        pri = 0.8
        return [result.init_result(no, pri)]

    def add_result_baidu_percentage(self, answers):
        per_results = []
        for index, answer in enumerate(answers):
            per_results.append(result.init_result(index, answer.prop))
        return 